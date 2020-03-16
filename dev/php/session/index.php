<?php


//methode pour chiffrer le mdp de l'user
$password = password_hash('monmotdepasse', PASSWORD_DEFAULT);
var_dump($password);

//methode pour comparer
password_verify('monmotdepasse', $password);

$test = password_verify('monmotdepasse', $password);
var_dump($test);

$test2 = password_verify('essai', $password);
var_dump($test2);

//Créer des sessions

session_start();
 //C'est dans la variable $_SESSION; que l'on stock des infos, comme un panier pour un ecommerce par exemple
$_SESSION['id'] = hash('sha256', session_id()); //important pour identifier une session. session_id(); seule ne permet pas de sécuriser une session, il faut rajouter le hash('sha256', session_id())
$_SESSION['user'] = 'megane';

class Connection
{
 public static function connect()
 {
   try {
       $pdo =  new PDO(
           'mysql:host='. $config['host'] .';dbname=' . $config['dbname'],
           $config['dbuser'],
           $config['passwd'],
           [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
       );

       $pdo->exec('set NAMES utf8');

   } catch (PDOException $e) {
       die($e->getMessage());
   }
 }
}

$pdo = Connection::connect();

// class QueryBuilder()
// {
//   public function getFilms($pdo)
//   {
//
//   }
// }

class Product
{
  public $name;
  public $description;
  public $price;

  public function __construct($name, $description, $price)
  {
    $this->name = $name;
    $this->description = $description;
    $this->price = $price;
  }
}


class Cart
{
  public $owner;
  public $products; //tableau de produits
  public $total;

  public function __construct($user)
  {
    $this->owner = $user; // il faut identifier les instances de Cart de manière unique avec un UUID par exemple
    $_SESSION['cart'] = $this;
  }

  public function add($product)
  {
    $this->products[$product->name] = $product;
  }

  protected function total()
  {

    $this->total = 0;
    foreach ($this->products as $product) {
      $this->total += $product->price;
    }

    return $_SESSION['cart']->total = $this->total;

  }

  public function getTotal()
  {
    return money_format('%i€', $this->total / 100);
  }

}

$product = new Product('shoes', 'super shoes', 5500); //toujours mettre le prix en centimes
$product2 = new Product('sopalin', 'super absorbant', 500); //toujours mettre le prix en centimes
$cart = new Cart($_SESSION['user']);
$cart->add($product);
$cart->add($product2);
//Effacer la session
unset($cart);
session_unset();
session_destroy();

var_dump($cart->total());
var_dump($_SESSION['cart']->getTotal());

class Model
{
 public queryBuilder;
 public function __construct(QueryBuilder $querBuilder)
 {
   $this->queryBuilder = $queryBuilder;
 }

 public selectAll()
 {
   return $this -> queryBuilder->selectAll($model);
 }
}

class Post extends Model
{
  public $title;
  public $body;
  public $description;
  public $createdAt;
}

class Comment extends Model
{
public
}
