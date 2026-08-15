createCanvas(400, 400);
background(0);
colorMode(HSB);

let x = random(0, width); // generates a random number between 0 and the canvas width.
let y = random(0, height); // generates a random number between 0 and the canvas height

fill(300, 100, 100); //fill() - Sets the color used to fill shapes.
rect(x, y, 50, 50); // Draws a rectangle. x,y random position om canvas
