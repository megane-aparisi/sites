<?php

include('database/connexion.php');

$post = $_POST;

if(isset($post['task'])  && !empty($post['task']) ) {
  $task = filter_input(INPUT_POST, $post['task'], FILTER_SANITIZE_STRING);
  $task = sanitize($post['task']);
}

if(isset($post['description']) && !empty($post['description'])) {
  $description = filter_input(INPUT_POST, $post['description'],FILTER_SANITIZE_STRING);
  $description = sanitize($post['description']);
}

if(isset($post['date_butoir']) && !empty($post['date_butoir'])) {
  $date_butoir = $post['date_butoir'];
  $date_butoir = sanitize($post['date_butoir']);
  $date = explode('-', $date_butoir);
  $is_date = checkdate($date[1], $date[2], $date[0]);
  if ($is_date) {
    $date_butoir = implode('-', $date);
  }
}

if(isset($post['priorite']) && !empty($post['priorite'])) {
  $priority = $post['priorite'];
  $priority = sanitize($post['priorite']);
}

if(isset($post['task'])  && !empty($post['task'])) {
  $array = [$task, $description, $date_butoir, $priority];

  $handle = fopen('index.csv', 'a');
  fputcsv ($handle, $array);
  fclose($handle);
}

if(isset($_POST['button']))
    {
        if($task AND $description AND $date_butoir AND $priority)
        {
          $stmt = $connexion->prepare("INSERT INTO tasks (deadline, titre, description, priorite) VALUES (:deadline, :titre, :description, :priorite)");

          $stmt->bindParam(':deadline', $date_butoir);
          $stmt->bindParam(':titre', $task);
          $stmt->bindParam(':description', $description);
          $stmt->bindParam(':priorite', $priority);
          $stmt->execute();

          header('Location: http://localhost/dev/php/todolist/');
        }
        else
        {
            echo "Veuillez renseigner tous les champs !";
        }
    }

$handle = fopen('index.csv', 'r');
while($tasks_array = fgetcsv($handle)){
  // var_dump($tasks_array);
}



// $results = getTasks($query);


 ?>
