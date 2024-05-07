ALTER TABLE `people` DROP COLUMN `bottom_position_description`;

DROP TABLE IF EXISTS `bottom_quotes`;
CREATE TABLE `bottom_quotes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `quote` text DEFAULT NULL,
  `timeout` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;