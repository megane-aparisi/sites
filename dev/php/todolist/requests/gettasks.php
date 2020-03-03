<?php
$connexion->exec('SET NAMES utf8');

$query = $connexion->prepare("SELECT * FROM tasks");

$query->execute();
// while($results = $query->fetch(PDO::FETCH_ASSOC)){
// }
function getTasks($query) {
      return $query->fetchAll(PDO::FETCH_ASSOC);
}
$results = $query->fetchAll(PDO::FETCH_ASSOC);
