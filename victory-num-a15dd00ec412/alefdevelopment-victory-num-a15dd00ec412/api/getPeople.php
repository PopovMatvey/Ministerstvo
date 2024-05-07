<?php
require_once '../admin/engine/sql.php';

echo json_encode([
    'result' => q('select people.* from cities inner join people on people.city_id = cities.id left join regions on regions.id = cities.region_id order by people.s_name', []),
]);
die();
