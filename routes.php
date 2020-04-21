<?php

$router->get('', 'PagesController@accueil');
$router->get('index.php', 'PagesController@accueil');
$router->get('prestations', 'PagesController@prestations');
$router->get('occasions', 'PagesController@occasions');
$router->get('actualites', 'PagesController@actualites');
$router->get('contact', 'PagesController@contact');


/*
//Poster des articles
$router->get('add-post', 'FormController@form');
$router->post('add-post', 'FormController@form');

$router->get('post', 'PostController@getPost');

// Une route pour afficher le formulaire de creation de compte utilisateur
$router->get('register-form', 'RegisterController@index');
$router->post('register-user', 'RegisterController@registerUser');


//Login
$router->post('login-user', 'LoginController@loginUser');
$router->get('login-form', 'LoginController@index');


//Logout
$router->post('logout', 'SessionController@session');

//Admin
$router->get('admin-article', 'AdminController@index');

// Creer un article
$router->post('add-article', 'AdminController@admin');
*/