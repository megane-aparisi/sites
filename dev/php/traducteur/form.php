<?php

//mon dictionnaire



$post = $_POST;

if(isset($post['word'])  && !empty($post['word'])) {
  $word = $post['word'];
}

if(isset($post['direction']) && !empty($post['direction'])) {
  $direction = $post['direction'];
}

function translate($word, $direction) {
  $dictionnary = array(
    'un' => 'one',
    'deux' => 'two',
    'trois' => 'three',
    'quatre' => 'four',
    'cinq' => 'five',
  );
  if ($direction == 'toEnglish' && array_key_exists($word, $dictionnary)) {
    return $dictionnary[$word];
  }
  elseif (in_array($word, $dictionnary)) {
    return array_search($word, $dictionnary);
  } else {
    echo 'je ne connais pas ce mot';
  }
}
if(isset($word)){
  $motTraduit = translate($word, $direction);
}


?>
<form class="container" action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
 <fieldset>
  <legend>Besoin de traduction ?</legend>
    <div class="form_ans">
      <p class="field">
        <label for="word"></label>
        <input type="text" id="word" name="word" required="required" placeholder="Votre mot">
      </p>
      <p class="field">
        <legend>Quelle traduction désirez-vous ?</legend>
          <select name="direction" aria-label="Choisissez un sens de traduction" required>
            <option value="">Votre choix</option>
            <option value="toEnglish">Français vers Anglais</option>
            <option value="toFrench">Anglais vers Français</option>
          </select>
      </p>
      <p class="field">
        <label for="answer"></label>
        <input
          type="text"
          name="answer"
          placeholder="Résultat de la traduction"
          <?php if(isset($motTraduit)) : ?>
            value="<?= $motTraduit; ?>"
          <?php endif; ?>
          >
      </p>
    </div>
  </fieldset>
  <p class="form_btn">
  <button class="send_btn" type="submit" name="button">Traduire</button>
  <button class="reset_btn" type="reset">Effacer</button>
  </p>
</form>
