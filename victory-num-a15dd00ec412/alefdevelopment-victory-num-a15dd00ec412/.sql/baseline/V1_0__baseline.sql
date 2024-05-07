DROP TABLE IF EXISTS `people`;
DROP TABLE IF EXISTS `cities`;
DROP TABLE IF EXISTS `regions`;
DROP TABLE IF EXISTS `countries`;

CREATE TABLE `countries` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `code` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `countries` (`name`, `code`) VALUES 
	('Армения', 'ARM'), ('Азербайджан', 'AZE'), ('Беларусь', 'BLR'), ('Эстония', 'EST'),
    ('Грузия', 'GEO'), ('Казахстан', 'KAZ'), ('Киргизия', 'KGZ'), ('Литва', 'LTU'), 
    ('Латвия', 'LVA'), ('Молдова', 'MDA'), ('Россия', 'RUS'), ('Таджикистан', 'TJK'), 
    ('Туркменистан', 'TKM'), ('Украина', 'UKR'), ('Узбекистан', 'UZB');

CREATE TABLE `regions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `country_id` int(11) unsigned NOT NULL,
  `country_number` int(11) unsigned,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `cities` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `region_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `people` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `photo` varchar(255),
  `city_id` int(11) unsigned NOT NULL,
  
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