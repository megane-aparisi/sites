let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let deleteBtn = document.getElementById('clear_btn');
let allColorsBtns = Array.from(document.getElementsByClassName('jsColor'));
let color = 'black';
let weightBtns = Array.from(document.getElementsByClassName('jsWeight'));
let weight = '2';

canvas.width = 800;
canvas.height = 600;


let isDrawing = false;
let posY = 0;
let posX = 0;

deleteBtn.addEventListener('click', function(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
});





function drawCircle(e) {

  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
  context.lineTo(posX, posY);
  context.strokeStyle = color;
  context.lineWidth = weight;
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.stroke();
  posX = e.offsetX;
  posY = e.offsetY;

}


canvas.addEventListener('mousedown', function(e){
  isDrawing = true;
  posX = e.offsetX;
  posY = e.offsetY;
});

canvas.addEventListener('mousemove', function(e){
  if(isDrawing){
    drawCircle(e);
  }
});

canvas.addEventListener('mouseup', function(e){
  isDrawing = false;
});

canvas.addEventListener('mouseleave', function(e){
  isDrawing = false;
});

/*COULEURS*/

document.addEventListener('DOMContentLoaded', function() {
  uniqueColor();
  uniqueWeight();
});

function uniqueColor() {
  allColorsBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        color = this.getAttribute('data-color');
    })
  });
}

let multiColor = document.getElementById('multi');
multiColor.addEventListener('change', function() {
  color = multiColor.value;
});

/*EPAISSEUR*/

function uniqueWeight() {
  weightBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        weight = this.getAttribute('id');
    })
  });
}
