
<form class="container" action="<?= $action ?>" method="post">
 <fieldset>

    <div class="form_ans">
      <p class="field">
        <label for="tache">Votre tâche :</label>
        <input class="btn_tache" type="text" name="task" value="<?= isset($res) ? $res['titre'] : '' ?>" required="required">
      </p>

      <p class="field_description">
        <label class="bloc_description1" for="description">Description de votre tâche :</label>
        <textarea class="bloc_description" type="text" name="description" required="required" value="<?= isset($res) ? $res['description'] : '' ?>"></textarea>
      </p>
      <div class="field_container">

      <p class="field_date">
        <label for="date">Date butoir de votre tâche :</label>
        <input class="bloc_date" type="date" name="date_butoir" required="required" placeholder="Date"  value="<?= isset($res) ? $res['deadline'] : '' ?>">
      </p>

      <p class="field_priority">
        <legend>Priorité de votre tâche</legend>
          <select class="bloc_choices" name="priorite" aria-label="Choisissez une option"  >
            <option value=""><?= isset($res) ? $res['priorite'] : '' ?> </option>
            <option value="faible">Faible</option>
            <option value="normale">Normale</option>
            <option value="haute">Haute</option>
          </select>
      </p>
      </div>
    </div>
  </fieldset>
  <p class="form_btn">
  <button class="send_btn" type="submit" name="button">Envoyer</button>
  </p>
</form>
