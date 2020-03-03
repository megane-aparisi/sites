<form class="todo" name="todo" action="<?= $action ?>" method="POST">
    <label for="title">Title</label>
    <input type="text" name="title" value="<?= isset($task) ? $task['titre'] : '' ?>">
    <label for="description">Description</label>
    <input type="text" name="description" value="<?= isset($task) ? $task['description'] : '' ?>">
    <label for="priorite">Priorite</label>
    <input type="text" name="priorite" value="<?= isset($task) ? $task['priorite'] : '' ?>">
    <label for="deadline">Deadline</label>
    <input type="date" name="deadline" value="<?= isset($task) ? $task['deadline'] : '' ?>">
    <?= isset($task) ? '<input type="hidden" name="task_id" value="' . $task['id'] . '">' : '' ?>
    <input type="submit" value="Submit">
</form>