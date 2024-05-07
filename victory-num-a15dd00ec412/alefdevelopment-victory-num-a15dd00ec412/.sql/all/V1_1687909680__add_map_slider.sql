DROP TABLE IF EXISTS `map_slides`;
CREATE TABLE `map_slides` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) DEFAULT NULL,
  `timeout` int(11) DEFAULT 5,
  `orderby` int(11) unsigned,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;