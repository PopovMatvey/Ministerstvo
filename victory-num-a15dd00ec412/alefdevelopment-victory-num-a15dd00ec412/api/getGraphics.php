<?php

require_once '../admin/engine/sql.php';

$graphics = q('select * from graphics', []);

usort($graphics, function ($a, $b) {
    return $a['sort'] === $b['sort'] ? 0 : ($a['sort'] < $b['sort'] ? -1 : 1);
});

echo json_encode([
    'result' => $graphics,
]);
die();
