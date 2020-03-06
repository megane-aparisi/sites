<?php
include("../connexion.php");


if(isset($_GET['task_id']) && !empty($_GET['task_id'])) {
  $get = $_GET;

  $task_id = sanitize($get['task_id']);

  $query = $connexion->prepare("SELECT * FROM tasks WHERE id=" . $task_id);

  $query->execute();

  $res = $query->fetch(PDO::FETCH_ASSOC);

}




if(isset($_POST['task_id']) && !empty($_POST['task_id'])) {
  $post = $_POST;
  $task_id = sanitize($post['task_id']);

  $delete = $connexion->prepare("DELETE FROM tasks WHERE id = :id");

  $delete->bindParam(':id', $task_id);

  $delete->execute();

  header('Location: http://localhost/dev/php/todolist/');
}



?>

<html lang="fr">
  <head>
    <link href="style.css" rel="stylesheet" >
  </head>
  <body>
    <main>
      <h2>Détails de ma tâche</h2>
      <?php
        echo '<ul>';
        echo '<li><a href="tasks/?task_id=' . $res['id'] . '">Tâche #' . $res['id'] .'</a></li>';
        echo '<li>' . $res['titre'] . '</li>';
        echo '<li>' . $res['description'] . '</li>';
        echo '<li>' . $res['deadline'] . '</li>';
        echo '<li>' . $res['priorite'] . '</li>';
        echo '</ul>';
      ?>
       <form class="delete" action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="POST">
         <p class="form_btn">
         <button class="reset_btn" type="submit" value="<?php echo $res['id'] ?>" name="task_id">Supprimer ma tâche</button>
         </p>
       </form>
    </main>
</body>
</html>
