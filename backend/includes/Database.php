<?php

declare(strict_types=1);

final class Database
{
    private static ?mysqli $connection = null;

    public static function getConnection(): mysqli
    {
        if (self::$connection instanceof mysqli) {
            return self::$connection;
        }

        $mysqli = @new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

        if ($mysqli->connect_error) {
            throw new RuntimeException('Impossible de se connecter à la base de données MySQL. Vérifiez la configuration DB_HOST, DB_NAME, DB_USER et DB_PASS.');
        }

        if (!empty(DB_CHARSET)) {
            $mysqli->set_charset(DB_CHARSET);
        }

        self::$connection = $mysqli;

        return self::$connection;
    }

    public static function close(): void
    {
        if (self::$connection instanceof mysqli) {
            self::$connection->close();
            self::$connection = null;
        }
    }
}
