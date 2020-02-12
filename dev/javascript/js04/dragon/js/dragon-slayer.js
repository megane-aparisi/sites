'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/


// Il nous faut un chevalier et un computer
const chevalier = {
  pointsDeVieinitia : 100,
  pointsDeVie : 0,
  initiative : 0,
  attaque : 0,
}

const dragon = {
  pointsDeVieinitia : 100,
  pointsDeVie : 0,
  initiative : 0,
  attaque : 0,
}



//Niveau de difficulté

/*
let difficult="";

do {
 difficult = window.prompt(`Merci d'écrire votre niveau de difficulté : facile, normal ou difficile`);
}
while (difficult != `facile` && `normal` && `difficile`); */

let difficult = window.prompt(`Merci d'écrire votre niveau de difficulté : facile, normal ou difficile`);

let nombreDeDesJoueur;
let nombreDeDesDragon;
let nombreDeFaces;

if(difficult == `facile`){
  nombreDeDesJoueur = 10;
  nombreDeDesDragon = 5;
  nombreDeFaces = 10;
}
  else if (difficult == `normal`) {
    nombreDeDesJoueur = 10;
    nombreDeDesDragon = 10;
    nombreDeFaces = 10;
  }
  else {
    nombreDeDesJoueur = 7;
    nombreDeDesDragon = 10;
    nombreDeFaces = 10;
  }

  // Determiner les points de vie des perso

  // PV dragon : 100 + 5D10
  // PV joueur : 100 + 10D10

  // int = nb entier

  /*
  *@param int nombreDeDes
  *@param int nombreDeFaces
  *@return int sum
  sum = si je jette 2 dés à 6 faces mon score sera entre 2 et 12.
  Fonction doit me donner un nombre compris entre nombreDeDes * 1minimum et 50 max pour le dragon ou 100max pour le joueur
  */


function generateNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}

function lanceLesDes(nombreDeDes, nombreDeFaces){
    let sum = 0;
    for (var i = 0; i < nombreDeDes; i++) {
    sum = sum + generateNumberBetween(1, nombreDeFaces)
    // OU  sum = sum + Math.floor(Math.random() * nombreDeFaces) + 1;
    }
    return sum;
}


const pointsDeVieDuJoueur = lanceLesDes(nombreDeDesJoueur, nombreDeFaces);
const pointsDeVieDuDragon = lanceLesDes(nombreDeDesDragon, nombreDeFaces);

chevalier.pointsDeVieinitia += pointsDeVieDuJoueur;
dragon.pointsDeVieinitia += pointsDeVieDuDragon;
chevalier.pointsDeVie = chevalier.pointsDeVieinitia
dragon.pointsDeVie = dragon.pointsDeVieinitia

// Determiner les initiatives

function initiative() {
  const nombreDeDesInitiative = 10;
  const nombreDeFaceDesInitiative = 6;

  chevalier.initiative = lanceLesDes(nombreDeDesInitiative, nombreDeFaceDesInitiative);
  dragon.initiative = lanceLesDes(nombreDeDesInitiative, nombreDeFaceDesInitiative);

  return {
    dragon: dragon,
    chevalier: chevalier,
  }
}
initiative();


// Determiner les attaques

const nombreDeDesAttaque = 3;
const nombreDeFaceDesAttaque = 6;

const nombreDeDesAttaqueMinoreFacile = 2;
const nombreDeDesAttaqueMinoreDifficile = 1;

const nombreDeFaceDesAttaqueM = 6

let desM;
let desMpourcentage;

if(difficult == `facile`) {
  desM = lanceLesDes(nombreDeDesAttaqueMinoreFacile, nombreDeFaceDesAttaqueM);
} else if (difficult =='difficile') {
  desM = lanceLesDes(nombreDeDesAttaqueMinoreDifficile, nombreDeFaceDesAttaqueM);
} else {
  desM = 0;
}

  function play() {
    if (dragon.initiative > chevalier.initiative) {
      const attaqueNormal = lanceLesDes(nombreDeDesAttaque, nombreDeFaceDesAttaque);
      dragon.attaque = attaqueNormal + (attaqueNormal * (desM / 100));
      chevalier.pointsDeVie = chevalier.pointsDeVie - dragon.attaque;
      console.log(`Le dragon attaque et cause ${dragon.attaque} points de dommage. Le dragon a ${dragon.pointsDeVie} points de vie et le chevalier n'a plus que ${chevalier.pointsDeVie} points de vie `);
    } else {
      const attaqueNormal = lanceLesDes(nombreDeDesAttaque, nombreDeFaceDesAttaque);
      chevalier.attaque = attaqueNormal - (attaqueNormal *(desM / 100))
      dragon.pointsDeVie = dragon.pointsDeVie - chevalier.attaque;
      console.log(` Le chevalier attaque et cause ${chevalier.attaque} points de dommage. Le chevalier a ${chevalier.pointsDeVie} points de vie et le dragon n'a plus que ${dragon.pointsDeVie} points de vie `);
    }
    initiative();
  }
  console.table(chevalier);
  console.table(dragon);


// Déterminer la répétition des tours

let round = 0;

while (dragon.pointsDeVie > 0 && chevalier.pointsDeVie > 0) {
  play();
  round++;
}

// Créer les dés

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
