<?php

include('../database/connection.php');
include('../helper/helper_functions.php');
include('../config/dbconfig.php');

$post = sanitizePost($_POST);

$stmt = $pdo->prepare('UPDATE tasks SET deadline = :deadline, titre = :titre, description = :description, priorite = :priorite, users_id = :users_id WHERE id = :id');

$user_id = 1;

$stmt->bindParam(':deadline', $post['deadline']);
$stmt->bindParam(':titre', $post['title']);
$stmt->bindParam(':description', $post['description']);
$stmt->bindParam(':priorite', $post['priorite']);
$stmt->bindParam(':users_id', $user_id);
$stmt->bindParam(':id', $post['task_id']);

try {
    $stmt->execute();
    header('Location: ' . $_SERVER['HTTP_REFERER']);
} catch (Exception $e) {
    die($e->getMessage());
}
