
<?php

include('database/connexion.php');

$stmt = $connexion->prepare("UPDATE tasks SET tasks deadline = :deadline, titre = :titre, description = :description, priorite = :priorite, statut = :statut WHERE id = :task_id");
$stmt->bindParam(':deadline', $date_butoir);
$stmt->bindParam(':titre', $task);
$stmt->bindParam(':description', $description);
$stmt->bindParam(':priorite', $priority);
$stmt->bindParam(':task_id', $task_id);

$stmt->execute();
$connexion = null;
header('location: http://localhost/dev/php/todolist/');

$handle = fopen('index.csv', 'r');
while($tasks_array = fgetcsv($handle)) {}
fclose($handle);
?>

<form class="delete" action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="POST">
  <p class="form_btn">
    <button class="reset_btn" type="submit" value="<?php echo $res['id'] ?>" name="task_id">Supprimer ma tâche</button>
  </p>
</form>
