<ul>
    <li>
        <?= $task['titre']; ?>
        <?php if(empty($_GET)) : ?>
            <a href="?task=<?=$task['id']; ?>"><span>Click to edit</span></a>
        <?php endif ?>
    </li>
    <li>
        <?= $task['description']; ?>
    </li>
    <li>
        <?= $task['priorite']; ?>
    </li>
    <li>
        <?= $task['deadline']; ?>
    </li>
    <?php if($task['done']) : ?>
        <li>Task Complete</li>
    <?php else : ?>
        <li>Task incomplete</li>
    <?php endif ?>
</ul>
