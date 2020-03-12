let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let isDrawing = true;


canvas.addEventListener('click', function(e){
  constructor(e);
});

function constructor(e){

  this.colorRef = {
    r: getRandomNumber(255, 0),
    g: getRandomNumber(255, 0),
    b: getRandomNumber(255, 0),
  }

  this.circleSize = getRandomNumber(45, 1);

  this.mousePos =  getMousePos(e.target, e);
  this.drawCircle();
}

function drawCircle(e) {

  let colorRef = {
    r: getRandomNumber(255, 0),
    g: getRandomNumber(255, 0),
    b: getRandomNumber(255, 0),
  }

  let circleSize = getRandomNumber(45, 1);
  let mousePos =  getMousePos(canvas, e);

  context.beginPath();
  context.arc(mousePos.x, mousePos.y, circleSize, 0,  Math.PI * 2);
  // context.moveTo(e.x, e.y);
  context.fillStyle = `rgba(${colorRef.r}, ${colorRef.g}, ${colorRef.b},1)`;
  context.fill();
  context.stroke();
}

function getRandomNumber(max, min){
  let randomNumber = Math.floor(Math.random() * (max- min +1) + min);
  return randomNumber;
}


function getMousePos(canvas, e) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height)
  };
}

canvas.addEventListener('mousedown', function(e){
  isDrawing = true;
});

canvas.addEventListener('mousemove', function(e){
  if(isDrawing){
     constructor(e);
  }
});

canvas.addEventListener('mouseup', function(e){
  isDrawing = false;
});


// canvas.addEventListener('mousedown', function(e){
//   let mouseX = e.pageX - this.offsetLeft;
//   let mouseY = e.pageY - this.offsetTop;
//
//   paint = true;
//   redraw();
//   addClick(mouseX, mouseY);
// });
//
// canvas.addEventListener('mousemove', function(e){
//   if(paint){
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
//     redraw();
//   }
// });
//
// canvas.addEventListener('mouseup', function(e){
//   paint = false;
// });
//
// let clickX = new Array();
// let clickY = new Array();
// let clickDrag = new Array();
// let paint;
//
// function addClick(x, y, dragging)
// {
//   clickX.push(x);
//   clickY.push(y);
//   clickDrag.push(dragging);
//   clickColor.push(choiceColor);
// }
//
// function redraw(){
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//   context.strokeStyle = "green"";
//   context.lineJoin = "round";
//   context.lineWidth = 5;
//
//   for(var i=0; i < clickX.length; i++) {
//     context.beginPath();
//     if(clickDrag[i] && i){
//       context.moveTo(clickX[i-1], clickY[i-1]);
//      }else{
//        context.moveTo(clickX[i]-1, clickY[i]);
//      }
//      context.lineTo(clickX[i], clickY[i]);
//      context.closePath();
//
//      context.stroke();
//   }
// }
//
// /*COULEURS*/
//
// let colorPurple = "#cb3594";
// let colorGreen = "#659b41";
// let colorYellow = "#ffcf33";
// let colorBrown = "#986928";
//
// let choiceColor = colorPurple;
// let clickColor = new Array();
