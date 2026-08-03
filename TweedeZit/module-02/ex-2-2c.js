createCanvas(400, 400);
background(0);
noStroke();
strokeWeight(15);

colorMode(HSB);
rectMode(CENTER);

let x = width / 2;
let y = height / 2;

fill(random(0, 60), 50, 100); // 2e (60) getal is doe hoeveel heid graden!
rect(x, y, 400, 400);
fill(random(0, 60), 50, 100);
rect(x, y, 300, 300);
fill(random(0, 60), 50, 100);
rect(x, y, 200, 200);
fill(random(0, 60), 50, 100);
rect(x, y, 100, 100);
