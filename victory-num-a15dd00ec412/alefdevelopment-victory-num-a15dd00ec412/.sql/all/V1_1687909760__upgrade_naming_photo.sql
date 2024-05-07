UPDATE people
INNER JOIN cities ON people.city_id = cities.id
INNER JOIN regions ON cities.region_id = regions.id
SET people.photo = concat('/uploads/', regions.country_id, '_', regions.id, '_', people.s_name, '.png')
WHERE people.id <> 0