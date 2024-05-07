UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 4;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 5;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 7;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 9;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 10;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 14;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 16;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 21;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '_', LEFT(people.name, 1), '_', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 22;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 25;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '', LEFT(people.name, 1), '', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 30;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 31;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 32;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 33;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 20;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 26;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 29;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.', LEFT(people.name, 1), '.', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 35;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, ' ', LEFT(people.name, 1), '', LEFT(people.f_name, 1), '.png')
WHERE people.city_id = 38;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 39;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 40;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '1.png')
WHERE people.id = 2217;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '2.png')
WHERE people.id = 2353;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '1.png')
WHERE people.id = 2402;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '2.png')
WHERE people.id = 2410;

UPDATE people
INNER JOIN cities on people.city_id = cities.id
INNER JOIN regions on cities.region_id = regions.id
SET people.photo = concat(regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.city_id = 41;
