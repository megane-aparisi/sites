<?php

include("include.php");

// require("include.php");
// require_once("include.php");

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <p>
<?php var_dump($montableau); ?>
    </p>



<?php
echo "<ul>";

  foreach ($montableau as $element) {
  echo "<li>" . $element . "</li>";
  }

  echo
  '<script>
    let test;
    test = "'. $test .'";
    console.log(test);
  </script>';


echo "</ul>";
?>
  </body>
</html>
