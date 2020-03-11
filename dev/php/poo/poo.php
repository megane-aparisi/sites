<?php
class animals
{
  public $race;

  function __construct($race)
  {
    $this->race = $race;
    var_dump($this->race);
  }
}

class chien extends animals
{

}

$dog = new chien('labrador');
var_dump($dog);

class chat extends animals
{
  
}

$cat = new chat('maincoon');
var_dump($cat);
