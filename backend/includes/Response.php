<?php

declare(strict_types=1);

final class ApiResponse
{
    public static function json(int $statusCode, array $payload = [], ?string $message = null): void
    {
        http_response_code($statusCode);
        header('Content-Type: application/json; charset=UTF-8');

        if ($message !== null) {
            $payload['message'] = $message;
        }

        echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }
}

function sanitize_string(?string $value): string
{
    return trim(strip_tags((string) $value));
}
