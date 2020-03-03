<?php

$create_table_users = '
    CREATE TABLE IF NOT EXISTS users (
        id int(11) NOT NULL AUTO_INCREMENT,
        name char(150) NOT NULL,
        email char(150) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY email (email)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
';

$create_table_tasks = '
    CREATE TABLE IF NOT EXISTS tasks (
        id int(11) NOT NULL AUTO_INCREMENT,
        deadline date NOT NULL,
        titre char(50) NOT NULL,
        description text NOT NULL,
        priorite char(8) NOT NULL,
        done tinyint(1) NOT NULL DEFAULT 0,
        users_id int(11) NOT NULL,
        PRIMARY KEY (id),
        KEY fk_users_id (users_id),
        CONSTRAINT fk_users_id FOREIGN KEY (users_id) REFERENCES users (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
';

$create_user = '
    INSERT INTO users (name, email ) VALUES (\'Laurent\', \'l.neveux@icloud.com\');
';

$add_done_field = 'ALTER TABLE `tasks` ADD `done` BOOLEAN NOT NULL AFTER `priorite`;';

$update_user_id_not_null = 'ALTER TABLE `tasks` CHANGE `users_id` `users_id` INT(11) NOT NULL;';