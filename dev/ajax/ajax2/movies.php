<?php foreach($movies as $movie) : ?>
<div class="listmovie">
    <p><?= $movie['title'] ?></p>
    <p><?= $movie['body'] ?></p>
    <p> <img src="<?= $movie['image'] ?>" alt="illustration"> </p>
</div>
<?php endforeach ?>
