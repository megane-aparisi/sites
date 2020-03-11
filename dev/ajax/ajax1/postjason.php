<?php
function sendPostResponse(){
  header("Content-type: application/json; charset=utf-8");
  echo json_encode((['results' =>
  ['status' => 'Data received']]
));
}

if ($_POST['prenom']=== 'megane'){
  sendPostResponse();
}

?>
