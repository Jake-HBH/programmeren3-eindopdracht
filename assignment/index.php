<?php
// Require functions for actions
require_once "includes/actions.php";

// Based on the existence of the GET parameter, 1 of the 2 functions will be called
if (!isset($_GET['id'])) {
    $data = getSkateboards();
} else {
    $data = getSkateboardDetails($_GET['id']);
}

//header("Content-Type: application/json");
//echo json_encode($data);
//exit;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skateboard Magazine</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.10.5/css/bulma.min.css">
    <script type="text/javascript" src="js/main.js" defer></script>
</head>
<body>
<section>
    <div id="backgroundImage">
        <h1 class="main-title">Skateboard Magazine</h1>
        <section id="skateboardGallery">
            <?php foreach ($data as $skateboard): ?>
                <div>
                    <div class="skateboardCard"
                    <figure>
                        <img src="<?php echo $skateboard['image']; ?>" alt="<?php echo $skateboard['name']; ?>">
                    </figure>
                    <div>
                        <div>
                            <h2 class="title is-4"><?php echo $skateboard['name']; ?></h2>
                            <p><?php echo $skateboard['detailedName']; ?></p>
                            <button id="detailsButton">Details</button>
                            <button id="favoriteButton">Add to favorites</button>
                        </div>
                    </div>
                </div>
    </div>
    <?php endforeach; ?>
</section>
</body>
</html>
