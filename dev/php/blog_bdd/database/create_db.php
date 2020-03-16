<?php

include('config/dbconfig.php');
include('create_tables.php');

$host = $config['host'];
$dbuser = $config['dbuser'];
$dbname = $config['dbname'];


try {
    $pdo = new PDO("mysql:host=$host", $dbuser, $config['passwd']);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS $dbname; USE $dbname")
    or die(print_r($pdo->errorInfo(), true));

    $create_users = $pdo->prepare($create_table_users);
    $create_category = $pdo->prepare($create_table_category);
    $create_posts = $pdo->prepare($create_table_posts);
    $create_comments = $pdo->prepare($create_table_comments);
    $create_user_password = $pdo->prepare($create_user_password);
    $create_users->execute();
    $create_category->execute();
    $create_posts->execute();
    $create_comments->execute();
    $create_user_password->execute();

    $user = $pdo->prepare($create_user);
    $user->execute();

    echo 'database, tables and user created';
} catch (PDOException $e) {
    die("DB ERROR: ". $e->getMessage());
}

$pdo = null;
