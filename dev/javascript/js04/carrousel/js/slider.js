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
let figure = document.getElementById('figure');

let dot = document.getElementsByClassName('dot');
let dotStyle = document.getElementById('dot-style');
let dotList = document.querySelectorAll('#dot-style span');

function getSpans(){
 return document.querySelectorAll('#dot-style span');
}

function addDot() {
  let dot = document.createElement('span');
  dot.classList.add('dot');
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
let indexPhoto = 0;
let dotsIndex = indexPhoto;
let intervalID = '';




function dot_link() {
  const spans = dotStyle.querySelectorAll('span');
  for (dotsIndex = 0; dotsIndex < spans.length; dotsIndex++) {
    spans[dotsIndex].classList.remove('active');
    if (indexPhoto == dotsIndex) {
      spans[indexPhoto].classList.add('active');
    }
  }
}



function slide_initial(){
  img.src = my_pictures[indexPhoto].src;
  figcaption.innerText = my_pictures[indexPhoto].legend;
  dot_link();
}

function play_image_change_next() {
  indexPhoto++;
  if (indexPhoto >= my_pictures.length) {
    indexPhoto = 0;
  }
  img.src = my_pictures[indexPhoto].src;
  figcaption.innerText = my_pictures[indexPhoto].legend;
  dot_link();
}

/*CLIQUE SUR PUCE*/

function addEventListenerToDot(){

  let allSpan = getSpans();
  allSpan.forEach(function(span, index){
    span.addEventListener('click', function() {
      img.src = my_pictures[index].src;
      figcaption.innerText = my_pictures[index].legend;
      indexPhoto = index;
      dot_link();
    });
  });
}


function addEventListenerToPlay(speed) {
  play.addEventListener('click', () => {
    const icon = play.querySelector('i');

    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');


    if(icon.classList.contains('fa-play')) {
      return clearInterval(intervalID);
    }

    intervalID = setInterval( () => play_image_change_next(), speed);
  });
}
/*************NEXT************/
function bounce(){
  figure.classList.add('bounce');
}


function addEventListenerToNext() {
  next.addEventListener('click', () => {
    play_image_change_next();
    bounce()
  });

}

/*************PREV************/
function play_image_change_prev() {
  if (indexPhoto <= 0) {
   indexPhoto = my_pictures.length;
  }

  indexPhoto--;
  img.src = my_pictures[indexPhoto].src;
  figcaption.innerText = my_pictures[indexPhoto].legend;
  dot_link();
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

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// document.addEventListener('DOMContentLoaded', () => {
//   addEventListenerToDot();
//   slide_initial();
//   addEventListenerToPlay();
//   addEventListenerToToggle();
//   addEventListenerToNext();
//   addEventListenerToPrev();
//   addEventListenerToRandom();
// });

document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        play_image_change_prev();
    }
    else if(e.keyCode === 39){
        play_image_change_next();
    }
});



 // On peut mettre le DOMcontentLoaded en fonction :

function startSlider(options){
  document.addEventListener('DOMContentLoaded', () => {
    addEventListenerToDot();
    slide_initial();
    addEventListenerToPlay(options.speed);
    addEventListenerToToggle();
    addEventListenerToNext();
    addEventListenerToPrev();
    addEventListenerToRandom();
  });
}

// Puis lui attribuer des options de la sorte :

startSlider({
 speed: 2000,
 fullscreen: true,
})
