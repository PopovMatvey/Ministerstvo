<?php
require_once '../admin/engine/sql.php';

echo json_encode([
    'result' => isset($_GET['id']) ? q1(
        'SELECT people.* 
        FROM cities 
        INNER JOIN people ON people.city_id = cities.id 
        LEFT JOIN regions ON regions.id = cities.region_id 
        WHERE people.id = ?
        ORDER BY people.s_name
        LIMIT 1',
        [$_GET['id']]
    ) : []
]);

die();
