<?php

if(isset($_POST['task_id']) && !empty($_POST['task_id'])) {
  $post = $_POST;
  $task_id = sanitize($post['task_id']);

  $delete = $connexion->prepare("DELETE FROM tasks WHERE id = :id");

  $delete->bindParam(':id', $task_id);

  $delete->execute();

  header('Location: http://localhost/dev/php/todolist/');
}

?>
