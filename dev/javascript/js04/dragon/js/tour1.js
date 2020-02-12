function round() {
if (dragon.initiative > chevalier.initiative) {
  dragon.attaque = lanceLesDes(nombreDeDesAttaque, nombreDeFaceDesAttaque);
  chevalier.pointsDeVie = chevalier.pointsDeVie - dragon.attaque;
  document.write(
    `
    <figure class="game-round">
        <img src="images/knight-winner.png" alt="Chevalier vainqueur">
        <figcaption>Le dragon est le plus rapide, le dragon vous attaque et vous inflige ${dragon.attaque} points de dommage !</figcaption>
    </figure>
    <!-- Etat du jeu -->
    <div class="game-state">
        <figure class="game-state_player">
            <img src="images/knight.png" alt="Chevalier">
            <figcaption>${chevalier.pointsDeVie}</figcaption>
        </figure>
        <figure class="game-state_player">
            <img src="images/dragon.png" alt="Dragon">
            <figcaption>${dragon.pointsDeVieinitia}</figcaption>
        </figure>
    </div>
    `);

} else {
  chevalier.attaque = lanceLesDes(nombreDeDesAttaque, nombreDeFaceDesAttaque);
  dragon.pointsDeVie = dragon.pointsDeVie - chevalier.attaque;
  console.log(  `
    <figure class="game-round">
        <img src="images/knight-winner.png" alt="Chevalier vainqueur">
        <figcaption>Vous êtes le plus rapide, vous attaquez le dragon et vous infligez ${chevalier.attaque} points de dommage !</figcaption>
    </figure>
    <!-- Etat du jeu -->
    <div class="game-state">
        <figure class="game-state_player">
            <img src="images/knight.png" alt="Chevalier">
            <figcaption>${chevalier.pointsDeVieinitia}</figcaption>
        </figure>
        <figure class="game-state_player">
            <img src="images/dragon.png" alt="Dragon">
            <figcaption>${dragon.pointsDeVie}</figcaption>
        </figure>
    </div>
    `);



}
}

document.write(html)
