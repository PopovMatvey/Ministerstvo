<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');

require_once '../admin/engine/sql.php';

echo json_encode([
    'result' => q('select id, name, country_id, country_number as region_id from regions', [])
]);
die();
