<?php
require_once '../admin/engine/sql.php';

echo json_encode([
    'result' => q('SELECT `photo`, `timeout` FROM `map_slides` ORDER BY `orderby`', [])
]);
die();
