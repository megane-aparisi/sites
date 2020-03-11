const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;
const context = canvas.getContext('2d');

context.beginPath();
context.fillStyle = 'red';
context.stroke();
context.strokeStyle = 'blue';
context.arc(100, 100, 100, 0, Math.PI*2);

context.fill();

// document.addEventListener('resize', function(){
//   canvas.width = window.innerWidth / 2;
//   canvas.height = window.innerHeight / 2;
// });

context.beginPath();
context.rect(100, 100, 100, 150);
context.strokeStyle = 'blue';
context.stroke();

context.beginPath();
context.moveTo(10, 10);
context.lineTo(100, 100);
context.stroke();

document.addEventListener('click', function(e){
  console.log(e);
  context.beginPath();
  context.moveTo(e.x, e.y);
  context.lineTo(200, 200);
  // context.lineTo(e.x * Math.random(), e.y * Math.random());
  context.stroke();
});

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height)
    };
}
