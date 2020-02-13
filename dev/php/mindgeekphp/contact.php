<!DOCTYPE html>
<html lang="fr">
  <?php require("head.php"); ?>
  <body>
    <?php require("headerbis.php"); ?>
    <main>
      <h2>Contactez-nous !</h2>

      <form class="container" action="index.html" method="post">
       <fieldset>
        <legend>M'envoyer un email</legend>
          <div class="form_ans">
            <p class="field">
              <label for="firstname"><img src="img/bg_form_name.svg" alt="Votre prenom" width="50"></label>
              <input type="text" id="firstname" name="user_firstname" required="required" placeholder="Votre prénom">
            </p>

            <p class="field">
              <label for="mail"><img src="img/bg_form_mail.svg" alt="Votre mail" width="50"></label>
              <input type="mail" id="mail" name="user_mail" required="required" placeholder="Votre mail">
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


    </main>
    <footer>
      <?php require("footer.php"); ?>
    </footer>
  </body>
</html>
