<?php

function sendGetResponse() {
  $results = ['results' => [
                      'status' => true,
                      'prenom' => $_GET['query']
                    ]
              ];

  header("Content-type: application/json; charset=utf-8");

  echo json_encode($results);

}

if ($_GET['query'] === 'megane'){
  sendGetResponse();
}
