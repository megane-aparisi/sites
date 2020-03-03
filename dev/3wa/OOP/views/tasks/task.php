<?php
include('requests/gettask.php');
?>
<?php if(!empty($task)) : ?>
<section class="form">
    <h2>Edit Task</h2>
    <?php
        $action = 'requests/update_task.php';
        include('views/forms/create_tasks.php');
     ?>
</section>
<section class="list">
    <?php
        echo '<h2>' . $task['titre'] . '</h2>';
        include('views/includes/tasklist.view.php');
    ?>
</section>

<?php else : ?>
    <p>No task to show yet</p>
<?php endif ?>