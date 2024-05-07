<?php
require_once '../admin/engine/sql.php';

$cities = [];
$people = [];

if (isset($_GET['search'])) {
    $search_query = $_GET['search'] . '%';
    $cities = q("select cities.id, cities.name, regions.country_id, regions.country_number as region_id from cities inner join regions on regions.id = cities.region_id and cities.name like '". $search_query ."' order by cities.name", []);
    $people = q("select * from people where name like '". $search_query ."' or s_name like '". $search_query ."' or f_name like '". $search_query ."' order by s_name", []);
}

echo json_encode([
    'result' => [
        'cities' => $cities,
        'people' => $people
    ]
]);
die();
