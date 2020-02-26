'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let sec = 10;
document.getElementById('compte_a_rebours').innerText = sec;
let rocket = document.getElementById('rocket');
let firingBtn = document.getElementById('firing-button');
let body = document.querySelector('body');

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

firingBtn.addEventListener("click", () => {
  rocket.src = 'images/rocket2.gif';
  let timer = setInterval(function rebours() {
    sec--;
    document.getElementById('compte_a_rebours').innerText = sec;
    if(sec == 0) {
      rocket.classList.add('tookOff');
      rocket.src = 'images/rocket3.gif';
      document.getElementById('afficher_compte_a_rebours').innerText = 'Décollage !';
      return clearInterval(timer);
    }
  }, 1000);
});

function ajouteClassEtoile(div){
  let stars = Math.random();

    if(stars < 0.33) {
      div.classList.add('tiny');
    }

    else if(stars < 0.66) {
      div.classList.add('normal');
    }

    else {
      div.classList.add('big');
    }
};

function nbAleatoire(max, min){
  return Math.floor(Math.random() * (max - min) + min);
};

function positionAleatoire(item) {
 item.style.left = nbAleatoire(window.innerWidth, 0) +'px';
 item.style.top = nbAleatoire(window.innerHeight, 0) +'px';
}



function creerEtoile() {
  const div =  document.createElement('div');
  div.classList.add('star');
  ajouteClassEtoile(div);
  positionAleatoire(div);
  body.append(div);
};

for (var i = 0; i <= 150; i++) {
  creerEtoile();
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
