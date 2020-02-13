<header class="banner">
  <a href="./index.php">
    <img src="img/logo.png" alt="MindGeek">
  </a>
  <a id="open" class="burger" href="#navigation">
    <i class="fas fa-bars" aria-hidden="true"></i>
  </a>
  <nav id="navigation">
    <?php

    $nav = array(
      '<i class="fas fa-users" aria-hidden="true"></i> Serveur mutualisé' => './mutualise.html',
      '<i class="fas fa-user" aria-hidden="true"></i> Serveur Dédié' => './dedie.html',
      '<i class="fas fa-cloud" aria-hidden="true"></i> Solution Cloud'=> './cloud.html',
      '<i class="fas fa-envelope" aria-hidden="true"></i> Contact' => './contact.php',
    );


    foreach ($nav as $element => $value) {
    echo '<a href=" '. $value .' " >' . $element . '</a>'  ;
  };


    ?>
  </nav>
  <div class="bg-banner-home">
    <h1>L'hébergement à prix libre</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
  </div>
  <form>
    <p>
    <input width="100%" type="search" id="site-search" name="q"
     aria-label="rechercher sur le site" placeholder="Que recherchez-vous?">
    </p>
  </form>
</header>
