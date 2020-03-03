<?php
include('config/dbconfig.php');
$host = $config['host'];
$dbname = $config['dbname'];

try {
  $connexion = new PDO(
              "mysql:host=$host;dbname=$dbname",
              $config['username'],
              $config['password'],
              [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
          );

} catch (PDOException $erreur) {
  die($erreur->getMessage());
}
