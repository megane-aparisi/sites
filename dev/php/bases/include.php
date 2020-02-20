<?php

//declarer une variable
$test = "test";

//déclarer une constante
define("IDENTITE", "Mégane");

const IDENTITE2 = "Megane";

//déclarer un tableau
$montableau = ["test", "test2", "test3", true, 1, 1.5];

//ou

$montableau2 = array("test", "test2", "test3");

//afficher ma variable (avec un $), afficher ma constante (on ne met pas le dollard)
echo $test;
echo IDENTITE2;

//afficher un tableau (echo ne marche pas, c'est seulement pour string/nombre)

echo "<pre>"; //nettoyer l'affichage de var_dump
var_dump($montableau);

//pour concaténer on utilise des points

echo "<p>" . $test . "</p>";

//faire une boucle
for ($i=0; $i < 10 ; $i++) {
  echo "<p>" . $i . "</p>";
}

$i = 0;
while ($i < 10) {
  echo $i;
  $i++;
}


$a = 0;
do {
  echo "<p>" . "coucou". "</p>";
  $a++;
} while ($a < 10);

$montableauassociatif = array(
  'un' => '1',
  'deux' => '2',
  'trois' => '3',
  'quatre' => '4',
  'cinq' => '5',
);
var_dump($montableauassociatif);

echo "<ul>";
foreach ($montableauassociatif as $element => $value) {
  echo "<li>$element => {$value}</li>";

}
echo "</ul>";

function functionNanme($value) {
  #code;
}

for ($i=0; $i <10 ; $i++) {
  // code...
}
