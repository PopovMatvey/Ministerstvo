<?php
require_once '../admin/engine/sql.php';

echo json_encode([
    'result' => q('select * from bottom_quotes', []),
]);
die();
