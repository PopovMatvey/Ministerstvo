UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '', LEFT(people.name, 1), '', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 43;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 44;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 45;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 46;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '', LEFT(people.name, 1), '', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 47;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '', LEFT(people.name, 1), '', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 48;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.', people.s_name, '.png')
WHERE people.city_id = 50;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 51;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 52;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 53;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 54;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 56;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 57;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 60;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', UPPER(SUBSTRING(people.s_name,1,1)),LOWER(SUBSTRING(people.s_name,2)), '.png')
WHERE people.city_id = 61;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', UPPER(SUBSTRING(people.s_name,1,1)),LOWER(SUBSTRING(people.s_name,2)), '1.png')
WHERE people.id = 3307;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', UPPER(SUBSTRING(people.s_name,1,1)),LOWER(SUBSTRING(people.s_name,2)), '2.png')
WHERE people.id = 3308;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 63;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, ' ', people.name, ' ', people.f_name, '.png')
WHERE people.city_id = 68;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 65;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 18;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 66;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 67;