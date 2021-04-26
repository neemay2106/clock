var hr,mm,ss;



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
  
}

function draw() {
  background(255,255,255); 
  hr = hour();
  mm = minute();
  ss = second();
  hrAngle = map(hr%12,0,12,0,360);
  mmAngle = map(mm,0,60,0,360);
  ssAngle = map(ss,0,60,0,360);

  
  push();
  rotate(ssAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mmAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

 
  stroke(255,0,255);
 point(0,0)
 strokeWeight(10);
 noFill();

 stroke(255,0,0);
  arc(0,0,300,300,0,ssAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mmAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  drawSprites();

}