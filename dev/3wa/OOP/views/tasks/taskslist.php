<?php

include('requests/gettasks.php');

if($tasks) {
    foreach($tasks as $task) {
        include('views/includes/tasklist.view.php');
    }
} else {
    echo '<p>There is no tasks yet</p>';
}
