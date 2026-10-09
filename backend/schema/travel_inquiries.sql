CREATE TABLE IF NOT EXISTS `travel_inquiries` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(180) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `traveler_count` VARCHAR(30) NOT NULL,
  `travel_type` VARCHAR(120) NOT NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('new', 'pending', 'replied', 'closed') NOT NULL DEFAULT 'new',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_email` (`email`),
  KEY `idx_status` (`status`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
