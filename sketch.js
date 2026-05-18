let bgImage;

function preload() {
  bgImage = loadImage("Assets/images/beaver.jpg"); // Replace with your image filename
}

function setup() {
  createCanvas(800, 600);
  background(bgImage);
  noLoop();
}

function draw() {}

function mousePressed() {
  fill(random(255), random(255), random(255), 150);
  noStroke();
  ellipse(mouseX, mouseY, 25, 25);
}
