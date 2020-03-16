<?php

$create_table_users = '
    CREATE TABLE IF NOT EXISTS users (
        id_author INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name_author CHAR(150) NOT NULL,
        email_author CHAR(150) NOT NULL,
        is_author BOOLEAN DEFAULT FALSE,
        is_the_boss BOOLEAN DEFAULT FALSE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';

$create_table_category = '
      CREATE TABLE IF NOT EXISTS categories (
        id_category INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        titre CHAR(150) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      ';

$create_table_posts = '
      CREATE TABLE IF NOT EXISTS posts (
        id_post INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        id_author INT(11) NOT NULL,
        id_category INT(11) NOT NULL,
        titre CHAR(150) NOT NULL,
        body TEXT NOT NULL,
        postImg CHAR(200) NOT NULL,
        CONSTRAINT fk_id_author FOREIGN KEY (id_author) REFERENCES users (id_author),
        CONSTRAINT fk_id_category FOREIGN KEY (id_category) REFERENCES categories (id_category)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      ';

$create_table_comments = '
      CREATE TABLE IF NOT EXISTS comments (
        id_comment INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        id_post INT(11) NOT NULL,
        id_author INT(11) NOT NULL,
        comment TEXT NOT NULL,
        CONSTRAINT fk_id_post FOREIGN KEY (id_post) REFERENCES posts (id_post)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      ';

$create_user = '
  INSERT INTO users (name_author, email_author, is_the_boss ) VALUES (\'admin\', \'megane.aparisi@gmail.com\' , TRUE);
';

$create_user_password = '
  ALTER TABLE users ADD password CHAR(255) NOT NULL;
';
