<?php


$result = $_SERVER;
var_dump($_SERVER);

function sanitize($data)
{
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;
}

$file = 'file.txt';

$host = sanitize($result['HTTP_HOST']);
$agent = sanitize($result['HTTP_USER_AGENT']);

$string = $host . " " . $agent;

file_put_contents($file, $string . "\n", FILE_APPEND);



?>
