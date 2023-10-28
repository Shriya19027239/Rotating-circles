function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  
  let centerX = width / 2;
  let centerY = height / 2;
  let distance = dist(mouseX, mouseY, centerX, centerY);
  let numCircles =(distance / 10); 
  
  stroke(0);
  strokeWeight(1);
  noFill();
  line(centerX, centerY, mouseX, mouseY);
  
  for (let i = 0; i < numCircles; i++) {
    let circleSize = i * 10;
    let circleX = lerp(centerX, mouseX, i / numCircles);
    let circleY = lerp(centerY, mouseY, i / numCircles);
    
    stroke(0);
    strokeWeight(1);
    noFill();
    circle(circleX, circleY, circleSize);
  }
}