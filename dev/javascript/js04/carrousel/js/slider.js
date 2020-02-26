'use strict';   // Mode strict du JavaScript

/*


Quand on clique sur le bouton *slider-toggle* le carrousel démarre ou s'arrête alternativement, comme un bouton on/off.
Quand on appuie sur les touches fléchées gauche et droite du clavier on peut respectivement reculer et avancer dans le diaporama.*/

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let toggle = document.getElementById('toolbar-toggle');
let toolbar = document.getElementById('toolbar');
let play = document.getElementById('slider-toggle');
let next = document.getElementById('slider-next');
let prev = document.getElementById('slider-previous');
let random = document.getElementById('slider-random');
let img = document.getElementById('picture');
let figcaption = document.getElementById('figcaption');

let dot = document.getElementsByClassName("dot");
let dotStyle = document.getElementById("dot-style");

function addDot() {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dotStyle.append(dot);
}

let my_pictures = [
  {
    src: 'images/1.jpg',
    alt: 'image1',
    legend: 'Graffiti par Joenomias',
    dot: addDot(),
  },
  {
    src: 'images/2.jpg',
    alt: 'image2',
    legend: 'Route !',
    dot: addDot(),
  },
  {
    src: 'images/3.jpg',
    alt: 'image3',
    legend: 'Architecture moderne',
    dot: addDot(),
  },
  {
    src: 'images/4.jpg',
    alt: 'image4',
    legend: 'Building lighting',
    dot: addDot(),
  },
  {
    src: 'images/5.jpg',
    alt: 'image5',
    legend: 'City by Night',
    dot: addDot(),
  },
  {
    src: 'images/6.jpg',
    alt: 'image6',
    legend: 'Paris, mon amour',
    dot: addDot(),
  },
];


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

//Quand on clique sur l'hyperlien de l'interface de navigation *toolbar-toggle* les boutons de la barre d'outils s'affichent ou se cachent, comme un bouton on/off.
function addEventListenerToToggle() {
  toggle.addEventListener('click', () => {
    if(getComputedStyle(toolbar).display != 'none') {
      return toolbar.style.display = 'none';
    }

    toolbar.style.display = 'block';
  });
}


//Quand on clique sur les boutons de la barre d'outils l'une des actions spécifiées précédemment s'exécute.


/*************PLAY************/
let i = 0;
let intervalID = '';
function play_image_change_next() {
  i++;
  img.src = my_pictures[i].src;
  figcaption.innerText = my_pictures[i].legend;
  if (i >= my_pictures.length -1) {
    i = 0;
  }
}

function addEventListenerToPlay() {
  play.addEventListener('click', () => {
    const icon = play.querySelector('i');

    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');


    if(icon.classList.contains('fa-play')) {
      return clearInterval(intervalID);
    }

    intervalID = setInterval( () => play_image_change_next(), 2000);
  });
}
/*************NEXT************/

function addEventListenerToNext() {
  next.addEventListener('click', () => {
    play_image_change_next();
  });
}

/*************PREV************/
function play_image_change_prev() {
  if (i<=0) {
   i = my_pictures.length -1;
  }
    i--;
    img.src = my_pictures[i].src;
    figcaption.innerText = my_pictures[i].legend;
}

function addEventListenerToPrev() {
  prev.addEventListener('click', () => {

    play_image_change_prev();
  });
}

/*************RANDOM************/
function generateNb() {
  return Math.floor(Math.random() * my_pictures.length);
}


function play_image_change_random() {
    let random = generateNb();
    img.src = my_pictures[random].src;
    figcaption.innerText = my_pictures[random].legend;
}

function addEventListenerToRandom() {
  random.addEventListener('click', () => {
    play_image_change_random();
  });
}


/*************Lier les cerlces aux images************/



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  addEventListenerToPlay();
  addEventListenerToToggle();
  addEventListenerToNext();
  addEventListenerToPrev();
  addEventListenerToRandom();
});

document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        play_image_change_prev();
    }
    else if(e.keyCode === 39){
        play_image_change_next();
    }
});
