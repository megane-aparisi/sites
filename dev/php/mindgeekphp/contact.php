<?php

$data = $_POST;

var_dump($_POST['user_lastname']);
var_dump($data['user_prenom']);
var_dump($data['user_message']);





$handle = fopen('file.txt', 'a');
fwrite($handle , $data['user_lastname'] . "\n");
fwrite($handle , $data['user_prenom']  . "\n");
fwrite($handle , $data['user_message']  . "\n");
fclose($handle);

 ?>

<!DOCTYPE html>
<html lang="fr">
  <?php require("head.php"); ?>
  <body>
    <?php require("headerbis.php"); ?>
    <main>
      <h2>Contactez-nous !</h2>


      <?php require("form.php"); ?>

    </main>
    <footer>
      <?php require("footer.php"); ?>
    </footer>
  </body>
</html>
