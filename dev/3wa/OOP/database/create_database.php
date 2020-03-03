<?php

include('../config/dbconfig.php');
include('create_tables.php');

$host = $config['host'];
$dbuser = $config['dbuser'];
$dbname = $config['dbname'];


try {
    $pdo = new PDO("mysql:host=$host", $dbuser, $config['passwd']);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS $dbname; USE $dbname")
    or die(print_r($pdo->errorInfo(), true));

    $create_users = $pdo->prepare($create_table_users);
    $create_tasks = $pdo->prepare($create_table_tasks);
    $insert_user = $pdo->prepare($create_user);
    $update_done_field = $pdo->prepare($add_done_field);
    $update_user_id = $pdo->prepare($update_user_id_not_null);
    $create_users->execute();
    $create_tasks->execute();
    $insert_user->execute();
    $update_done_field->execute();
    $update_user_id->execute();
    echo 'database, tables and user created';
} catch (PDOException $e) {
    die("DB ERROR: ". $e->getMessage());
}

$pdo = null;