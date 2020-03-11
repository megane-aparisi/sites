<?php

  $contact = [
              'nom' => 'Megane',
              'phone' => '0658734627',
              'adress' => 'Aix-en-Provence'
              ];

  header("Content-type: application/json; charset=utf-8");

  echo json_encode($contact);
