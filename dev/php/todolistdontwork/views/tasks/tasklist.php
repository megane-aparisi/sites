
<div class="liste">
  <h2>Mes tâches</h2>
<?php include('requests/gettasks.php');?>


<?php foreach($results as $res) {
  include('views/includes/tasklist.view.php');
}?>
</div>
