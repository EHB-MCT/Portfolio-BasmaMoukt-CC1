createCanvas(400, 400);

let x = random(100, 300); //random x between 100 and 300
let y = random(100, 300); //random y between 100 & 300
let h = 75; // Make a variable h with value 75

background(0);

rectMode(CORNERS); // Use corner positions for rectangles
noStroke();
colorMode(HSB);

fill(330, h, 100);
rect(0, 0, x, y);

rect(x, y, width, height);

stroke(255); // Turn stroke (outline) back on, white color
noFill();
rect(100, 100, 300, 300); // Draw a rectangle with corners at (100,100) and (300,300)
