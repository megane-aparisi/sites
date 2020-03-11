const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

canvas.addEventListener('click', function(e){
  let position = positionObj.getMousePos(canvas, e);
  let circleSize = dessinObj.getRandomNumber(45, 1);
  const colorRef ={
    r: dessinObj.getRandomNumber(255, 0),
    g: dessinObj.getRandomNumber(255, 0),
    b: dessinObj.getRandomNumber(255, 0),
  };

  context.beginPath();
  context.arc(position.x, position.y, circleSize, 0,  Math.PI*2);
  // context.moveTo(e.x, e.y);
  context.fillStyle = `rgba(${colorRef.r}, ${colorRef.g}, ${colorRef.b},1)`;
  context.fill();
  context.stroke();
});
