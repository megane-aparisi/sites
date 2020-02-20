<form class="container" action="contact.php" method="post">
 <fieldset>
  <legend>M'envoyer un email</legend>
    <div class="form_ans">
      <p class="field">
        <label for="nom"><img src="img/bg_form_name.svg" alt="Votre nom" width="50"></label>
        <input type="text" id="nom" name="user_lastname" required="required" placeholder="Votre nom">
      </p>

      <p class="field">
        <label for="prenom"><img src="img/bg_form_mail.svg" alt="Votre prenom" width="50"></label>
        <input type="text" id="prenom" name="user_prenom" required="required" placeholder="Votre prenom">
      </p>

      <p class="field">
        <label for="message"><img src="img/bg_form_message.svg" alt="Votre message" width="50"></label>
        <input type="text" id="message" name="user_message" required="required" placeholder="Votre message">
      </p>
    </div>
  </fieldset>
  <p class="form_btn">
  <button class="send_btn" type="submit" name="button">Envoyer</button>
  <button class="reset_btn" type="reset">Effacer</button>
  </p>
</form>
