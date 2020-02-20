<?php include("connexion.php");?>


<!DOCTYPE html>
<html lang="fr">
  <head>
    <link href="style.css" rel="stylesheet" >
  </head>
  <body>
    <main>
      <h1>To Do List</h1>
      <form class="container" action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
       <fieldset>

          <div class="form_ans">
            <p class="field">
              <label for="tache">Votre tâche :</label>
              <input type="text" name="task" required="required" placeholder="Votre tâche">
            </p>

            <p class="field_description">
              <label for="description">Description de votre tâche :</label>
              <textarea type="text" name="description" required="required"></textarea>
            </p>
            <div class="fiel_container">

            <p class="field_date">
              <label for="date">Date butoir de votre tâche :</label>
              <input type="date" name="date_butoir" required="required" placeholder="Date">
            </p>

            <p class="field_priority">
              <legend>Priorité de votre tâche</legend>
                <select name="priorite" aria-label="Choisissez une option" required>
                  <option value="">Priorité </option>
                  <option value="faible">faible</option>
                  <option value="normale">normale</option>
                  <option value="haute">haute</option>
                </select>
            </p>
            </div>
          </div>
        </fieldset>
        <p class="form_btn">
        <button class="send_btn" type="submit" name="button">Envoyer</button>
        <button class="reset_btn" type="reset">Effacer</button>
        </p>
      </form>

        <?php

          foreach($results as $res) {
            echo '<ul>';
              echo '<li>' . $res['titre'] . '</li>';
              echo '<li>' . $res['description'] . '</li>';
              echo '<li>' . $res['deadline'] . '</li>';
              echo '<li>' . $res['priorite'] . '</li>';
             echo '</ul>';
            }
         ?>
    </main>
</body>
</html>

<?php

function sanitize($data){
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;
}

$post = $_POST;

if(isset($post['task'])  && !empty($post['task'])) {
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
          $push_sql = $connexion->prepare("INSERT INTO `tasks` (`deadline`, `titre`, `description`, `priorite`) VALUES ('".$date_butoir."', '".$task."', '".$description."', '".$priority."')");
          $push_sql->execute();
        }
        else
        {
            echo "Veuillez renseigner tous les champs !";
        }
    }

$handle = fopen('index.csv', 'r');
$tasks_array = fgetcsv($handle);


 ?>
