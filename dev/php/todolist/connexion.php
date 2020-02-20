<?php
$connexion = new PDO(
            'mysql:host=127.0.0.1;dbname=todolist',
            'root',
            'troiswa',
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );

$connexion->exec('SET NAMES utf8');

$query = $connexion->prepare("SELECT * FROM tasks");

$query->execute();

$results = $query->fetchAll(PDO::FETCH_ASSOC);
