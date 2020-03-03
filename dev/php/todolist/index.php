
<?php // NE VA PAS LA   include("./helper/helper_functions.php");?>
<?php // NE VA PAS LA   include("./requests/gettasks.php");?>
<?php include('database/connexion.php');?>
<?php include('requests/posttasks.php');?>


<!DOCTYPE html>
<html lang="fr">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=The+Girl+Next+Door&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli:700&display=swap" rel="stylesheet">
    <link href="css/normalize.css" rel="stylesheet" >
    <link href="css/style.css" rel="stylesheet" >
  </head>
  <body>
    <main>
      <h1>To Do List</h1>
      <?php if(array_key_exists('task_id', $_GET)) : ?>

          <h2>Editer ma tâche</h2>
        <?php
        $action = 'requests/posttasks.php';
          include('views/tasks/task.php');
          include('views/forms/create_tasks.php');
          include('requests/edit_task.php');
        ?>

      <?php else : ?>

      <?php
        $action = 'requests/posttasks.php';
        include('./views/forms/create_tasks.php');
        include('views/tasks/tasklist.php');?>
      </div>
    <?php endif ?>
    </main>
</body>
</html>
