<?php

include('./helper/helper_functions.php');

if(isset($_GET['task_id']) && !empty($_GET['task_id'])) {
  $get = $_GET;

  $task_id = sanitize($get['task_id']);

  $query = $connexion->prepare("SELECT * FROM tasks WHERE id=" . $task_id);

  $query->execute();

  $res = $query->fetch(PDO::FETCH_ASSOC);

}
