<?php

include('../database/connection.php');
include('../helper/helper_functions.php');
include('../config/dbconfig.php');

$post = sanitizePost($_POST);

$stmt = $pdo->prepare('INSERT INTO tasks (deadline, titre, description, priorite, users_id) VALUES (:deadline, :titre, :description, :priorite, :users_id)');

$user_id = 1;

$stmt->bindParam(':deadline', $post['deadline']);
$stmt->bindParam(':titre', $post['title']);
$stmt->bindParam(':description', $post['description']);
$stmt->bindParam(':priorite', $post['priorite']);
$stmt->bindParam(':users_id', $user_id);

try {
    $stmt->execute();
} catch (Exception $e) {
    die($e->getMessage());
}

header('Location: ' . $_SERVER['HTTP_REFERER']);