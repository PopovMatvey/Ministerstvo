<?php

if (isset($_GET['visit_id'])) {
    require_once '../admin/engine/sql.php';

    $counters = q('select * from counters', []);
    $id = intval($_GET['visit_id']);

    $key = array_search($id, array_column($counters, 'id'));

    if ($key !== false) {
        qi('UPDATE counters SET count = count + 1 WHERE id = ?', [$id]);
        header('Location: ' . $counters[$key]['url']);
        die();
    }
}

header('Location: /');
die();
