let bgImage;

function preload() {
  bgImage = loadImage("Assets/images/beaver.jpg");
}

function setup() {
  createCanvas(800, 600);
  background(bgImage);
  noStroke();
  rect(0, 0, 800, 100);
  textSize(32);
  textAlign(CENTER, TOP);
  fill(0);
  noStroke();
  text("Find the 8 Differences by clicking on them!", width / 2, 10);
  noLoop();
}

function draw() {}

function mousePressed() {
  fill(random(255), random(255), random(255), 150);
  noStroke();
  ellipse(mouseX, mouseY, 25, 25);
}
