<?php
//helper
function sanitize($data){
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;
}
