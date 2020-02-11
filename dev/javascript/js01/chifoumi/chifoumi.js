/*Détails

    Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.

Rappels

    Si le joueur et l'ordinateur font le même choix on obtient une égalité.
    Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
    La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
    La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
*/

//Déclaration des variables
let user
let computer
let choice_computer
let result

// Demande à la personne ce qu'elle joue
user = (window.prompt("Que voulez-vous jouer : pierre, feuille ou ciseaux ?"));
computer = Math.random();

// Définition des choix de l'ordinateur
if(computer < 0.33) {
  choice_computer = "pierre";
}

else if(computer < 0.66) {
  choice_computer = "feuille";
}

else {
  choice_computer = "ciseau";
}

//comparer les choix user et choice_computer
if(user == choice_computer) {
  /*document.write("Vous avez joué " + user + " et l'ordinateur " + choice_computer + "." + " Il y a égalité !")*/
  document.write (`Vous avez joué ${user} et l'ordinateur ${choice_computer}. Il y a égalité !`);
}

else if((user == "pierre" && choice_computer == "ciseaux") || (user == "ciseaux" && choice_computer == "feuille") || (user == "feuille" && choice_computer == "pierre")) {
  /*document.write("Vous avez joué " + user + " et l'ordinateur " + choice_computer + "." + " Vous avez gagné !")*/
  document.write (`Vous avez joué ${user} et l'ordinateur ${choice_computer}. Vous avez gagné !`);
}

else {
  /*document.write("Vous avez joué " + user + " et l'ordinateur " + choice_computer + "." +" Vous avez perdu !")*/
  document.write (`Vous avez joué ${user} et l'ordinateur ${choice_computer}. Vous avez perdu !`);
}
