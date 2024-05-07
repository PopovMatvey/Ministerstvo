DROP TABLE IF EXISTS `counters`;
CREATE TABLE `counters` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;