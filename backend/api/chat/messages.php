<?php

declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
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

if (!is_array($payload)) {
    $payload = [];
}

$conversationToken = trim((string) ($payload['conversation_token'] ?? $_GET['conversation_token'] ?? ''));
$visitorPhone = trim((string) ($payload['visitor_phone'] ?? ''));
$visitorName = trim(strip_tags((string) ($payload['visitor_name'] ?? '')));

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

function normalizePhone(string $phone): string
{
    $phone = preg_replace('/[^0-9+]/', '', trim($phone));
    return $phone ?? '';
}

function fetchConversation(PDO $pdo, string $conversationToken): ?array
{
    $statement = $pdo->prepare('SELECT * FROM chat_conversations WHERE conversation_token = :token LIMIT 1');
    $statement->execute([':token' => $conversationToken]);
    $conversation = $statement->fetch();

    return is_array($conversation) ? $conversation : null;
}

if ($conversationToken === '') {
    $newToken = bin2hex(random_bytes(16));
    $safePhone = normalizePhone($visitorPhone);
    $safeName = trim(strip_tags($visitorName));

    $statement = $pdo->prepare(
        'INSERT INTO chat_conversations (conversation_token, visitor_name, visitor_phone, status, created_at, updated_at)
         VALUES (:token, :visitor_name, :visitor_phone, :status, NOW(), NOW())'
    );
    $statement->execute([
        ':token' => $newToken,
        ':visitor_name' => $safeName !== '' ? $safeName : null,
        ':visitor_phone' => $safePhone !== '' ? $safePhone : null,
        ':status' => 'new',
    ]);

    $conversationId = (int) $pdo->lastInsertId();
    $conversation = fetchConversation($pdo, $newToken);

    echo json_encode([
        'success' => true,
        'conversation_id' => $conversationId,
        'conversation_token' => $newToken,
        'visitor_phone_required' => true,
        'messages' => [],
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$conversation = fetchConversation($pdo, $conversationToken);

if ($conversation === null) {
    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => 'Conversation introuvable ou expirée.',
        'error' => 'conversation_not_found',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($visitorPhone !== '') {
    $safePhone = normalizePhone($visitorPhone);
    if ($safePhone !== '' && ($conversation['visitor_phone'] === null || $conversation['visitor_phone'] === '')) {
        $updateStatement = $pdo->prepare('UPDATE chat_conversations SET visitor_phone = :phone, updated_at = NOW() WHERE id = :id');
        $updateStatement->execute([':phone' => $safePhone, ':id' => $conversation['id']]);
    }
}

$messagesStatement = $pdo->prepare(
    'SELECT id, conversation_id, direction, body, status, sender_phone, whatsapp_message_id, client_message_id, created_at
     FROM chat_messages
     WHERE conversation_id = :conversation_id
     ORDER BY created_at ASC, id ASC'
);
$messagesStatement->execute([':conversation_id' => $conversation['id']]);
$messages = $messagesStatement->fetchAll();

$payloadResponse = [
    'success' => true,
    'conversation_id' => (int) $conversation['id'],
    'conversation_token' => $conversationToken,
    'visitor_phone_required' => empty($conversation['visitor_phone']),
    'messages' => array_map(static function (array $message): array {
        return [
            'id' => (string) $message['id'],
            'direction' => $message['direction'],
            'body' => $message['body'],
            'status' => $message['status'],
            'sender_phone' => $message['sender_phone'],
            'created_at' => $message['created_at'],
            'whatsapp_message_id' => $message['whatsapp_message_id'],
        ];
    }, $messages),
];

echo json_encode($payloadResponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
