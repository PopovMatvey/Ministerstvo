alter table people add column gos_stat_info varchar(255) after gos_stat_end_year;
alter table people drop column gos_stat_start_year;
alter table people drop column gos_stat_end_year;
alter table people add column sex tinyint(1) default NULL;

alter table people add column `name` varchar(100) after full_name;
alter table people add column `f_name` varchar(100) after `name`;
alter table people add column `s_name` varchar(100) after `f_name`;
alter table people drop column `full_name`;

alter table people drop column place_ussr;
alter table people drop column photo;
alter table people add column photo varchar(255) after reward_list;

alter table people drop column birth_year;
alter table people add column birth_year varchar(100) after s_name;

alter table people drop column death_year;
alter table people add column death_year varchar(100) after birth_year;