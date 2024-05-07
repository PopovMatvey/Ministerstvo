DROP TABLE IF EXISTS `counters`;
CREATE TABLE `counters` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT 0,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `counters` (`filename`, `count`, `url`) VALUES ('75 лет победе', 0, '/files/vov_75_site.pdf'), ('70 лет победе', 0, 'https://www.gks.ru/free_doc/doc_2015/vov_svod_1.pdf');