createCanvas(400, 400);
background(0);
colorMode(HSB);
rectMode(CORNERS); // Draw rectangles using corner positions instead of x,y,width,height

let x = random(100, 300);
let y = random(100, 300);

// Set fill color (Hue=300, Saturation=100, Brightness=100)
fill(300, 100, 100);
// Draw a rectangle from (0,0) to the random (x,y)
rect(0, 0, x, y);
// Draw another rectangle from (x,y) to the bottom-right corner (400,400)
rect(x, y, 400, 400);
