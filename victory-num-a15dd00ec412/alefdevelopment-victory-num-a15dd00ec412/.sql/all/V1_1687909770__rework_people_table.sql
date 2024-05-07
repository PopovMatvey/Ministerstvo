DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `photo` varchar(255),
  `city_id` int(11) unsigned DEFAULT NULL,
  
  `full_name` varchar(255) NOT NULL,
  `place_ussr` varchar(100) NOT NULL,
  
  `birth_year` varchar(4),
  `death_year` varchar(4) DEFAULT '0',
  
  `gos_stat_start_year` varchar(4),
  `gos_stat_end_year` varchar(4) DEFAULT 0,
  
  `war_description` text,
  `work_descrpiption` text,
  
  `reward_list` text,
  `bottom_position_description` text,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;