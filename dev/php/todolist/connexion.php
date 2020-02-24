<?php

function sanitize($data){
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;
}

try {
  $connexion = new PDO(
              'mysql:host=127.0.0.1;dbname=todolist',
              'root',
              'troiswa',
              [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
          );

} catch (PDOException $erreur) {
  die($erreur->getMessage());
}



$connexion->exec('SET NAMES utf8');

$query = $connexion->prepare("SELECT * FROM tasks");

$query->execute();
// while($results = $query->fetch(PDO::FETCH_ASSOC)){
// }
function getTasks($query) {
      return $query->fetchAll(PDO::FETCH_ASSOC);
}
$results = $query->fetchAll(PDO::FETCH_ASSOC);
