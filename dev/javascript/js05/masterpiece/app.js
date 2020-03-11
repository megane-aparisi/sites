const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

canvas.addEventListener('click', function(e){
  new Draw(e);
});

class Draw {
  constructor(e) {

    this.colorRef = {
      r: new RandomNumber(255, 0),
      g: new RandomNumber(255, 0),
      b: new RandomNumber(255, 0),
    }

    this.circleSize = new RandomNumber(45, 1);
    this.mousePos =  new Position(canvas, e);
    this.drawCircle();
  }

  drawCircle() {
    context.beginPath();
    context.arc(this.mousePos.x, this.mousePos.y, this.circleSize.number, 0,  Math.PI * 2);
    // context.moveTo(e.x, e.y);
    context.fillStyle = `rgba(${this.colorRef.r.number}, ${this.colorRef.g.number}, ${this.colorRef.b.number},1)`;
    context.fill();
    context.stroke();
  }
}
