<?php

declare(strict_types=1);

require_once dirname(__DIR__) . '/config/config.php';
require_once dirname(__DIR__) . '/includes/Database.php';
require_once dirname(__DIR__) . '/includes/Response.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ApiResponse::json(405, ['success' => false], 'Méthode non autorisée. Utilisez POST.');
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody, true);

if (!is_array($data) || $data === []) {
    $data = $_POST;
}

if (!is_array($data)) {
    $data = [];
}

$requiredFields = [
    'first_name',
    'last_name',
    'email',
    'phone',
    'traveler_count',
    'travel_type',
];

$errors = [];
$normalized = [];

foreach ($requiredFields as $field) {
    $normalized[$field] = sanitize_string((string) ($data[$field] ?? ''));

    if ($field === 'email' && $normalized[$field] !== '' && !filter_var($normalized[$field], FILTER_VALIDATE_EMAIL)) {
        $errors[$field] = 'Adresse e-mail invalide.';
    }

    if (in_array($field, ['first_name', 'last_name', 'email', 'phone', 'traveler_count', 'travel_type'], true) && $normalized[$field] === '') {
        $errors[$field] = 'Ce champ est obligatoire.';
    }
}

$normalized['message'] = sanitize_string((string) ($data['message'] ?? ''));

if ($normalized['message'] !== '' && strlen($normalized['message']) < 10) {
    $errors['message'] = 'Le message est trop court.';
}

if (!empty($errors)) {
    ApiResponse::json(422, ['success' => false, 'errors' => $errors], 'Veuillez corriger les informations du formulaire.');
}

try {
    $connection = Database::getConnection();
} catch (RuntimeException $exception) {
    ApiResponse::json(503, ['success' => false, 'error' => 'database'], 'Le service de réservation est temporairement indisponible.');
}

$sql = 'INSERT INTO travel_inquiries (first_name, last_name, email, phone, traveler_count, travel_type, message, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, "new", NOW())';

$stmt = $connection->prepare($sql);

if ($stmt === false) {
    ApiResponse::json(500, ['success' => false, 'error' => 'database'], 'Erreur de préparation de la requête de réservation.');
}

$stmt->bind_param(
    'sssssss',
    $normalized['first_name'],
    $normalized['last_name'],
    $normalized['email'],
    $normalized['phone'],
    $normalized['traveler_count'],
    $normalized['travel_type'],
    $normalized['message'],
);

if (!$stmt->execute()) {
    $stmt->close();
    ApiResponse::json(500, ['success' => false, 'error' => 'database'], 'La réservation n’a pas pu être enregistrée.');
}

$inquiryId = $stmt->insert_id;
$stmt->close();

if (function_exists('mail') && ADMIN_EMAIL !== '') {
    $subject = 'Nouvelle demande de réservation Zero Stress Travel';
    $body = "Nouvelle demande de réservation\n\n";
    $body .= "Prénom : {$normalized['first_name']}\n";
    $body .= "Nom : {$normalized['last_name']}\n";
    $body .= "Email : {$normalized['email']}\n";
    $body .= "Téléphone : {$normalized['phone']}\n";
    $body .= "Nombre de personnes : {$normalized['traveler_count']}\n";
    $body .= "Type de voyage : {$normalized['travel_type']}\n\n";
    $body .= "Message :\n{$normalized['message']}\n";

    @mail(ADMIN_EMAIL, $subject, $body, "From: no-reply@" . parse_url(APP_URL, PHP_URL_HOST) . "\r\nReply-To: {$normalized['email']}\r\nX-Mailer: PHP/" . phpversion());
}

ApiResponse::json(201, [
    'success' => true,
    'message' => 'Votre demande a bien été enregistrée. Notre conciergerie vous répondra sous 24h.',
    'inquiry_id' => $inquiryId,
], 'Votre demande a bien été enregistrée.');
