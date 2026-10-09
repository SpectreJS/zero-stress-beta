<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '0');

if (!defined('APP_ROOT')) {
    define('APP_ROOT', dirname(__DIR__));
}

date_default_timezone_set('Europe/Paris');

function load_env_file(string $path): array
{
    $values = [];

    if (!is_file($path)) {
        return $values;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    if ($lines === false) {
        return $values;
    }

    foreach ($lines as $line) {
        $trimmed = trim($line);

        if ($trimmed === '' || str_starts_with($trimmed, '#')) {
            continue;
        }

        if (!str_contains($trimmed, '=')) {
            continue;
        }

        [$key, $value] = array_map('trim', explode('=', $trimmed, 2));
        $values[$key] = trim($value, " \t\n\r\0\x0B\"");
    }

    return $values;
}

$envFile = APP_ROOT . '/.env';
$envValues = load_env_file($envFile);

function env(string $key, mixed $default = null): mixed
{
    global $envValues;

    $value = $_ENV[$key] ?? $_SERVER[$key] ?? getenv($key);

    if ($value === false || $value === null) {
        $value = $envValues[$key] ?? $default;
    }

    if (is_string($value) && strtolower($value) === 'false') {
        return false;
    }

    if (is_string($value) && strtolower($value) === 'true') {
        return true;
    }

    if (is_string($value) && is_numeric($value)) {
        return $value + 0;
    }

    return $value;
}

define('DB_HOST', env('DB_HOST', 'localhost'));
define('DB_PORT', (int) env('DB_PORT', 3306));
define('DB_NAME', env('DB_NAME', 'zerostress'));
define('DB_USER', env('DB_USER', 'root'));
define('DB_PASS', env('DB_PASS', ''));
define('DB_CHARSET', env('DB_CHARSET', 'utf8mb4'));
define('APP_ENV', env('APP_ENV', 'production'));
define('ADMIN_EMAIL', env('ADMIN_EMAIL', 'bonjour@zerostresstravel.com'));
define('APP_URL', env('APP_URL', 'https://example.com'));
