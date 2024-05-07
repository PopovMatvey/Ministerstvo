<?php
require_once '../admin/engine/sql.php';

echo json_encode([
    'result' => q('select cities.id, cities.name, cities.region_id as search_region_id, regions.country_id, regions.country_number as region_id 
                    from cities 
                    inner join regions on regions.id = cities.region_id and cities.id in (select city_id from people)', [])
]);
die();
