CREATE TABLE IF NOT EXISTS `chat_conversations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `conversation_token` VARCHAR(128) NOT NULL,
  `visitor_name` VARCHAR(180) DEFAULT NULL,
  `visitor_phone` VARCHAR(30) DEFAULT NULL,
  `wa_phone` VARCHAR(30) DEFAULT NULL,
  `status` ENUM('new', 'open', 'waiting', 'closed') NOT NULL DEFAULT 'new',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_conversation_token` (`conversation_token`),
  KEY `idx_visitor_phone` (`visitor_phone`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `chat_messages` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `conversation_id` BIGINT UNSIGNED NOT NULL,
  `direction` ENUM('incoming', 'outgoing') NOT NULL,
  `body` TEXT NOT NULL,
  `status` ENUM('queued', 'sent', 'delivered', 'read', 'received', 'failed') NOT NULL DEFAULT 'queued',
  `sender_phone` VARCHAR(30) DEFAULT NULL,
  `whatsapp_message_id` VARCHAR(255) DEFAULT NULL,
  `client_message_id` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_conversation_id` (`conversation_id`),
  KEY `idx_whatsapp_message_id` (`whatsapp_message_id`),
  KEY `idx_created_at` (`created_at`),
  CONSTRAINT `fk_chat_messages_conversation`
    FOREIGN KEY (`conversation_id`) REFERENCES `chat_conversations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
