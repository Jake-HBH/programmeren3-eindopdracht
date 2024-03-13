<?php
// Require functions for actions
require_once "includes/actions.php";

// Based on the existence of the GET parameter, 1 of the 2 functions will be called
if (!isset($_GET['id'])) {
    $data = getSkateboards();
} else {
    $data = getSkateboardDetails($_GET['id']);
}

header("Content-Type: application/json");
echo json_encode($data);
exit;
?>

