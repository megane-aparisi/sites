<nav class="footer_nav">

  <?php

  $nav = array(
    'Accueil' => './index.html',
    'Serveur mutualisé' => './mutualise.html',
    'Serveur Dédié' => './dedie.html',
    'Solution Cloud'=> './cloud.html',
    'Contact' => './contact.html',
    'Se connecter' => './',
  );


  foreach ($nav as $element => $value) {
  echo '<a href=" '. $value .' " >' . $element . '</a>'  ;
};


  ?>

</nav>
<img src="img/logo.gif" alt="logo 3WA" width="50">
<p><small>Cet exercice de <span>3W Academy</span> est mis à disposition <span >pour l'usage personnel des étudiants, Pas de Rediffusion - Attribution - Pas d'Utilisation Commerciale - Pas de Modification - International</span>.<br>
Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de <a href="mailto:contact@3wa?fr"> contact@3wa.fr</a>.<br> Les maquettes ont été réalisées par <span class="blue">Justine Muller</span>.</small></p>
