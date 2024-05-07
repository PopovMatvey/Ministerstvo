<?php
require_once '../admin/engine/sql.php';

$id = $_GET['id'] ?? 0;

$graphic_info = q1(
    'SELECT * FROM graphics WHERE id = ? LIMIT 1', [$id]
);

$not_bot = !in_array($_SERVER['HTTP_USER_AGENT'], array(
    'facebookexternalhit/1.1 (+https://www.facebook.com/externalhit_uatext.php)',
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'OdklBot/1.0 (klass@odnoklassniki.ru)',
    'Mozilla/5.0 (compatible; vkShare; +http://vk.com/dev/Share)',
));

if ($not_bot) {
    header('Location: /graphics');
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
    if (isset($graphic_info['id'])) {
        $url = $not_bot ? '<meta property="og:url" content="/graphics" />' : '';

        $http = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
        $image_url = $http.'://'.$_SERVER['HTTP_HOST'].$graphic_info['url'];

        echo $url.'
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Цифры победы" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="'.$image_url.'" />';
    }
    ?>
</head>

<body>

</body>

</html>