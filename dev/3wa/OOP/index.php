<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TODOLIST</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <?php if(array_key_exists('task', $_GET)) : ?>
        <h1>TodoList</h1>
        <?php include('views/tasks/task.php'); ?>
        <a href="/dev/3wa/OOP">Back To Homepage</a>
    <?php else : ?>
        <h1>TodoList</h1>
        <section class="form">
            <h2>Create a Task</h2>
            <?php
                $action = 'requests/posttasks.php';
                include('views/forms/create_tasks.php');
            ?>
        </section><!--
        --><section class="list">
            <h2>Edit a Task</h2>
            <?php include('views/tasks/taskslist.php'); ?>
        </section>
    <?php endif ?>
</body>
</html>
