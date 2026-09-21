/*
   Description: Lesson 1 - Basics example, showing shapes, colour, and comments
   Author: Mr. Kowalczewski
   Date of last edit: September 21, 2026
*/

function setup() {
  createCanvas(1000, 600);
  background(200); // greyscale background
}

function draw() {

  // ----- Rectangle -----
  // fill/stroke apply to everything drawn after them,
  // until changed again (like picking up a coloured marker)
  fill(200, 50, 50); // red
  noStroke();
  rect(50, 50, 150, 100);

  // ----- Ellipse -----
  fill(50, 100, 200); // blue
  stroke(0); // black outline
  strokeWeight(3);
  ellipse(350, 100, 150, 100);

  // ----- Circle -----
  fill(80, 180, 90); // green
  strokeWeight(2);
  circle(600, 100, 100);

  // ----- Line -----
  stroke(0);
  strokeWeight(4);
  line(50, 200, 250, 250);

  // ----- Triangle -----
  fill(240, 200, 50); // yellow
  strokeWeight(2);
  triangle(350, 300, 450, 200, 550, 300);

  // ----- Quadrilateral -----
  // careful with point order, or the shape will look twisted!
  noFill();
  stroke(150, 0, 150); // purple outline only
  quad(650, 200, 800, 220, 780, 320, 630, 300);

  // ----- No stroke / no fill demo -----
  noStroke();
  fill(255, 150, 0); // orange, no outline
  rect(50, 400, 150, 100);

  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(350, 450, 150, 100); // outline only, no fill
}
