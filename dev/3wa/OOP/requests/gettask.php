<?php

include('database/connection.php');
include('helper/helper_functions.php');

$task_id = sanitizeGet($_GET['task']);
$stmt = $pdo->prepare('SELECT * FROM tasks WHERE id = :id');

$stmt->bindParam(':id', $task_id['task']);

try {
    $stmt->execute();
} catch (Exception $e) {
    die($e->getMessage());
}

$task = $stmt->fetch(PDO::FETCH_ASSOC);