<?php

declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Méthode non autorisée.',
        'error' => 'method_not_allowed',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = [];

if ($rawBody !== false && $rawBody !== '') {
    $decoded = json_decode($rawBody, true);
    if (is_array($decoded)) {
        $payload = $decoded;
    }
}

if ($payload === []) {
    $payload = $_POST;
}

$conversationToken = trim((string) ($payload['conversation_token'] ?? ''));
$message = trim(strip_tags((string) ($payload['message'] ?? '')));
$visitorPhone = trim((string) ($payload['visitor_phone'] ?? ''));
$visitorName = trim(strip_tags((string) ($payload['visitor_name'] ?? '')));
$consent = !empty($payload['consent']) && filter_var($payload['consent'], FILTER_VALIDATE_BOOLEAN);

if ($conversationToken === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'La conversation ou le message est invalide.',
        'error' => 'invalid_payload',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (!$consent) {
    http_response_code(403);
    echo json_encode([
        'success' => false,
        'message' => 'Vous devez accepter l’envoi vers WhatsApp Business avant de continuer.',
        'error' => 'consent_required',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function normalizePhone(string $phone): string
{
    $clean = preg_replace('/[^0-9+]/', '', trim($phone));
    return is_string($clean) ? $clean : '';
}

function sendWhatsAppText(string $to, string $body): array
{
    if (WHATSAPP_PHONE_NUMBER_ID === '' || WHATSAPP_API_TOKEN === '') {
        return [
            'ok' => false,
            'queued' => true,
            'reason' => 'missing_meta_config',
        ];
    }

    $endpoint = sprintf('%s/%s/messages', WHATSAPP_API_BASE, WHATSAPP_PHONE_NUMBER_ID);
    $payload = [
        'messaging_product' => 'whatsapp',
        'to' => $to,
        'type' => 'text',
        'text' => [
            'body' => $body,
        ],
    ];

    $ch = curl_init($endpoint);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . WHATSAPP_API_TOKEN,
            'Content-Type: application/json',
            'Accept: application/json',
        ],
        CURLOPT_TIMEOUT => 20,
    ]);

    $response = curl_exec($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($response === false || $httpCode < 200 || $httpCode >= 300) {
        return [
            'ok' => false,
            'queued' => true,
            'reason' => $curlError !== '' ? $curlError : 'meta_api_error',
            'http_code' => $httpCode,
        ];
    }

    $decoded = json_decode($response, true);
    $messageId = is_array($decoded) ? ($decoded['messages'][0]['id'] ?? null) : null;

    return [
        'ok' => true,
        'queued' => false,
        'whatsapp_message_id' => is_string($messageId) ? $messageId : null,
    ];
}

$dsn = sprintf('mysql:host=%s;port=%d;dbname=%s;charset=%s', DB_HOST, DB_PORT, DB_NAME, DB_CHARSET);

try {
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (Throwable $exception) {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'message' => 'Le service de messagerie est temporairement indisponible.',
        'error' => 'database',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$conversationStatement = $pdo->prepare(
    'SELECT * FROM chat_conversations WHERE conversation_token = :token LIMIT 1'
);
$conversationStatement->execute([':token' => $conversationToken]);
$conversation = $conversationStatement->fetch();

if (!is_array($conversation)) {
    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => 'Conversation introuvable.',
        'error' => 'conversation_not_found',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$safePhone = normalizePhone($visitorPhone);
if ($safePhone === '') {
    $safePhone = normalizePhone((string) $conversation['visitor_phone']);
}

if ($safePhone === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Un numéro WhatsApp valide est requis pour envoyer un message.',
        'error' => 'missing_phone',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($visitorName !== '' && ($conversation['visitor_name'] === null || $conversation['visitor_name'] === '')) {
    $update = $pdo->prepare('UPDATE chat_conversations SET visitor_name = :name, visitor_phone = :phone, updated_at = NOW() WHERE id = :id');
    $update->execute([
        ':name' => $visitorName,
        ':phone' => $safePhone,
        ':id' => $conversation['id'],
    ]);
} else if ($conversation['visitor_phone'] === null || $conversation['visitor_phone'] === '') {
    $update = $pdo->prepare('UPDATE chat_conversations SET visitor_phone = :phone, updated_at = NOW() WHERE id = :id');
    $update->execute([
        ':phone' => $safePhone,
        ':id' => $conversation['id'],
    ]);
}

$insertStatement = $pdo->prepare(
    'INSERT INTO chat_messages (conversation_id, direction, body, status, sender_phone, created_at, updated_at)
    VALUES (:conversation_id, :direction, :body, :status, :sender_phone, NOW(), NOW())'
);
$insertStatement->execute([
    ':conversation_id' => (int) $conversation['id'],
    ':direction' => 'outgoing',
    ':body' => $message,
    ':status' => 'queued',
    ':sender_phone' => $safePhone,
]);

$messageId = (int) $pdo->lastInsertId();
$result = sendWhatsAppText($safePhone, $message);

if ($result['ok'] === true) {
    $status = 'sent';
    $whatsappMessageId = (string) ($result['whatsapp_message_id'] ?? '');
    $updateMessage = $pdo->prepare('UPDATE chat_messages SET status = :status, whatsapp_message_id = :whatsapp_message_id, updated_at = NOW() WHERE id = :id');
    $updateMessage->execute([
        ':status' => $status,
        ':whatsapp_message_id' => $whatsappMessageId !== '' ? $whatsappMessageId : null,
        ':id' => $messageId,
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Votre message a bien été envoyé.',
        'data' => [
            'id' => $messageId,
            'direction' => 'outgoing',
            'body' => $message,
            'status' => $status,
            'created_at' => date('c'),
        ],
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$updateMessage = $pdo->prepare('UPDATE chat_messages SET status = :status, updated_at = NOW() WHERE id = :id');
$updateMessage->execute([
    ':status' => 'queued',
    ':id' => $messageId,
]);

http_response_code(202);
echo json_encode([
    'success' => true,
    'queued' => true,
    'message' => 'Le message a été enregistré et est en attente d’envoi WhatsApp. Configurez WhatsApp Business Platform pour activer l’envoi réel.',
    'reason' => $result['reason'] ?? 'pending',
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
