var hr = hour()
var mn = minute()
var sc = second()


function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);

  push();
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  line(30,25,80,60);
  stroke(166);
  pop();

  push();
  line(30, 20, 85, 75);
  stroke(126);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  pop();


  drawSprites();
}