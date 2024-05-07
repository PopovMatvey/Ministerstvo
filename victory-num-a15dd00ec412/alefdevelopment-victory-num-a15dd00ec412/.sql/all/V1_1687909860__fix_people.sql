UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '', people.name, '', people.f_name, '.png')
WHERE people.city_id = 1;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '', people.name, '', people.f_name, '.png')
WHERE people.city_id = 68;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 67;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', REPLACE(people.s_name, ' ', ''), '.png')
WHERE people.city_id = 63;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 60;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 52;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 45;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 40;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 38;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 33;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 25;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 21;

UPDATE people
SET people.photo = REPLACE(people.photo, ' ', '')
WHERE people.city_id = 7;
