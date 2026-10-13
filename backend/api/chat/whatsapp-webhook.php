<?php

declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With, X-Hub-Signature-256');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function verifyWebhookSignature(string $rawBody): bool
{
    if (WHATSAPP_APP_SECRET === '') {
        return true;
    }

    $header = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';
    if ($header === '') {
        return false;
    }

    $expected = 'sha256=' . hash_hmac('sha256', $rawBody, WHATSAPP_APP_SECRET);

    return hash_equals($expected, $header);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mode = (string) ($_GET['hub_mode'] ?? '');
    $challenge = (string) ($_GET['hub_challenge'] ?? '');
    $verifyToken = (string) ($_GET['hub_verify_token'] ?? '');

    if ($mode === 'subscribe' && $verifyToken === WHATSAPP_WEBHOOK_VERIFY_TOKEN && $challenge !== '') {
        echo $challenge;
        exit;
    }

    http_response_code(403);
    echo 'Forbidden';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method Not Allowed';
    exit;
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || $rawBody === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Webhook vide.']);
    exit;
}

if (!verifyWebhookSignature($rawBody)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Signature WhatsApp invalide.']);
    exit;
}

$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Payload JSON invalide.']);
    exit;
}

$dsn = sprintf('mysql:host=%s;port=%d;dbname=%s;charset=%s', DB_HOST, DB_PORT, DB_NAME, DB_CHARSET);

try {
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (Throwable $exception) {
    http_response_code(503);
    echo json_encode(['success' => false, 'message' => 'Base de données indisponible.']);
    exit;
}

function normalizePhone(string $phone): string
{
    $clean = preg_replace('/[^0-9+]/', '', trim($phone));
    return is_string($clean) ? $clean : '';
}

function ensureConversation(PDO $pdo, string $visitorPhone, ?string $waPhone = null): int
{
    $safePhone = normalizePhone($visitorPhone);
    if ($safePhone === '') {
        throw new RuntimeException('Numéro de visiteur invalide.');
    }

    $statement = $pdo->prepare('SELECT * FROM chat_conversations WHERE visitor_phone = :phone OR wa_phone = :wa_phone ORDER BY created_at DESC LIMIT 1');
    $statement->execute([':phone' => $safePhone, ':wa_phone' => $safePhone]);
    $conversation = $statement->fetch();

    if (is_array($conversation)) {
        if ($conversation['wa_phone'] === null && $waPhone !== null && $waPhone !== '') {
            $update = $pdo->prepare('UPDATE chat_conversations SET wa_phone = :wa_phone, updated_at = NOW() WHERE id = :id');
            $update->execute([':wa_phone' => $waPhone, ':id' => $conversation['id']]);
        }

        return (int) $conversation['id'];
    }

    $newToken = bin2hex(random_bytes(16));
    $insert = $pdo->prepare(
        'INSERT INTO chat_conversations (conversation_token, visitor_phone, wa_phone, status, created_at, updated_at)
         VALUES (:token, :visitor_phone, :wa_phone, :status, NOW(), NOW())'
    );
    $insert->execute([
        ':token' => $newToken,
        ':visitor_phone' => $safePhone,
        ':wa_phone' => $waPhone,
        ':status' => 'open',
    ]);

    return (int) $pdo->lastInsertId();
}

foreach ($payload['entry'] ?? [] as $entry) {
    foreach ($entry['changes'] ?? [] as $change) {
        $value = $change['value'] ?? [];

        foreach ($value['statuses'] ?? [] as $status) {
            $messageId = (string) ($status['id'] ?? '');
            $statusText = (string) ($status['status'] ?? '');

            if ($messageId === '' || $statusText === '') {
                continue;
            }

            $update = $pdo->prepare('UPDATE chat_messages SET status = :status, updated_at = NOW() WHERE whatsapp_message_id = :message_id');
            $update->execute([
                ':status' => in_array($statusText, ['sent', 'delivered', 'read'], true) ? $statusText : 'failed',
                ':message_id' => $messageId,
            ]);
        }

        foreach ($value['messages'] ?? [] as $message) {
            $from = normalizePhone((string) ($message['from'] ?? ''));
            $text = trim((string) ($message['text']['body'] ?? $message['caption'] ?? ''));
            $waMessageId = (string) ($message['id'] ?? '');

            if ($from === '' || $text === '') {
                continue;
            }

            $businessNumber = (string) ($value['metadata']['display_phone_number'] ?? '');
            $conversationId = ensureConversation($pdo, $from, $businessNumber !== '' ? $businessNumber : null);

            $insertMessage = $pdo->prepare(
                'INSERT INTO chat_messages (conversation_id, direction, body, status, sender_phone, whatsapp_message_id, created_at, updated_at)
                 VALUES (:conversation_id, :direction, :body, :status, :sender_phone, :whatsapp_message_id, NOW(), NOW())'
            );
            $insertMessage->execute([
                ':conversation_id' => $conversationId,
                ':direction' => 'incoming',
                ':body' => $text,
                ':status' => 'received',
                ':sender_phone' => $from,
                ':whatsapp_message_id' => $waMessageId !== '' ? $waMessageId : null,
            ]);
        }
    }
}

echo json_encode(['success' => true, 'received' => true], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
