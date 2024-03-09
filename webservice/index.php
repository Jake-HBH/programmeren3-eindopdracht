<?php
// Require functions for actions
require_once "includes/actions.php";

// Based on the existence of the GET parameter, 1 of the 2 functions will be called
if (!isset($_GET['id'])) {
    $data = getSkateboards();
} else {
    $data = getSkateboardDetails($_GET['id']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skateboard Magazine</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.10.5/css/bulma.min.css">
</head>
<body>
<header>
    <h1>Skateboard Magazine</h1>
</header>
<section class="section">
    <div class="container">
        <h1 class="title">Skateboard Magazine</h1>
        <div class="columns is-multiline">
            <?php foreach ($data as $skateboard): ?>
                <div class="column is-4">
                    <div class="skateboard-card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="<?php echo $skateboard['image']; ?>" alt="<?php echo $skateboard['name']; ?>">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h2 class="title is-4"><?php echo $skateboard['name']; ?></h2>
                                <p><?php echo $skateboard['detailedName']; ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
</body>
</html>
