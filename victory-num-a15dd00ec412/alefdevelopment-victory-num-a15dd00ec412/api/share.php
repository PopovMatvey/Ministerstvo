<?php
require_once '../admin/engine/sql.php';

$id = $_GET['id'] ?? 0;

$person_info = q1(
    'SELECT people.* 
    FROM cities 
    INNER JOIN people ON people.city_id = cities.id 
    LEFT JOIN regions ON regions.id = cities.region_id 
    WHERE people.id = ?
    ORDER BY people.s_name
    LIMIT 1',
    [$id]
);

$not_bot = !in_array($_SERVER['HTTP_USER_AGENT'], array(
    'facebookexternalhit/1.1 (+https://www.facebook.com/externalhit_uatext.php)',
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'OdklBot/1.0 (klass@odnoklassniki.ru)',
    'Mozilla/5.0 (compatible; vkShare; +http://vk.com/dev/Share)'
));

if ($not_bot) {
    header('Location: /people/' . $person_info['id'] ?? '');
    die();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Цифры Победы</title>
    <?php
    if (isset($person_info['id'])) {
        $url = $not_bot ? '<meta property="og:url" content="/people/' . $person_info['id'] . '" />' : '';

        echo $url . '
                <meta property="og:type" content="website" />
                <meta property="og:title" content="' . $person_info['name'] . " " . $person_info['s_name'] . " " . $person_info['f_name'] . '" />
                <meta property="og:description" content="Герои войны" />
                <meta property="og:image" content="' . $person_info['photo'] . '" />';
    }
    ?>
</head>

<body>

</body>

</html>