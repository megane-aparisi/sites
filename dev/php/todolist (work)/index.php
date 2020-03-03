<?php include("connexion.php");?>


<!DOCTYPE html>
<html lang="fr">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=The+Girl+Next+Door&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli:700&display=swap" rel="stylesheet">
    <link href="css/normalize.css" rel="stylesheet" >
    <link href="style.css" rel="stylesheet" >
  </head>
  <body>
    <main>
      <h1>To Do List</h1>
      <form class="container" action="posttraitment.php" method="post">
       <fieldset>

          <div class="form_ans">
            <p class="field">
              <label for="tache">Votre tâche :</label>
              <input class="btn_tache" type="text" name="task" required="required" >
            </p>

            <p class="field_description">
              <label class="bloc_description1" for="description">Description de votre tâche :</label>
              <textarea class="bloc_description" type="text" name="description" required="required"></textarea>
            </p>
            <div class="field_container">

            <p class="field_date">
              <label for="date">Date butoir de votre tâche :</label>
              <input class="bloc_date" type="date" name="date_butoir" required="required" placeholder="Date">
            </p>

            <p class="field_priority">
              <legend>Priorité de votre tâche</legend>
                <select class="bloc_choices" name="priorite" aria-label="Choisissez une option" required>
                  <option value="">Priorité </option>
                  <option value="faible">Faible</option>
                  <option value="normale">Normale</option>
                  <option value="haute">Haute</option>
                </select>
            </p>
            </div>
          </div>
        </fieldset>
        <p class="form_btn">
        <button class="send_btn" type="submit" name="button">Envoyer</button>
        </p>
      </form>
      <div class="liste">
        <h2>Mes tâches</h2>
        <?php
          foreach($results as $res) {
            echo '<ul>';
              echo '<li><a href="tasks/?task_id=' . $res['id'] . '">Tâche #' . $res['id'] .'</a></li>';
              echo '<li>' . $res['titre'] . '</li>';
              echo '<li>' . $res['description'] . '</li>';
              echo '<li>' . $res['deadline'] . '</li>';
              echo '<li>' . $res['priorite'] . '</li>';
             echo '</ul>';
            }
         ?>
      </div>

      <form class="delete" action="posttraitment.php" method="post">
       <fieldset>
          <div class="form_ans">
            <p class="field">
              <label for="id">Supprimer une tâche</label>
              <input class="bloc_delete" type="number" id="id" name="id" value="" placeholder="Tâche #">
            </p>
          </div>
        </fieldset>
        <p class="form_btn">
        <button class="reset_btn" type="submit" name="reset_button">Effacer</button>
        </p>
      </form>
    </main>
</body>
</html>
