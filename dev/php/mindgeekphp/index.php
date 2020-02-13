<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Mind Geek - Des solutions web intelligentes !</title>
    <meta name="description" content="Faites confiance au meilleur des prestataires web!">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/all.min.css" rel="stylesheet" >
    <link href="css/normalize.css" rel="stylesheet" >
    <link href="css/style.css" rel="stylesheet" >
    <script src="index.js"></script>
  </head>
  <body>

    <?php require("header.php"); ?>

    <main>
      <h2>Notre solution en 3 points</h2>
      <section class="list_articles_basic">

        <?php require("articles.php"); ?>

      </section>
      <h2>Choisissez votre style d'hébergement</h2>
      <section class="list_articles_basic">
       <?php require("articlesbis.php"); ?>
      </section>
    </main>
    <footer>
      <?php require("footer.php"); ?>
    </footer>
  </body>
</html>
