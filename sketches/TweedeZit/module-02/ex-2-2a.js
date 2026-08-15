createCanvas(400, 400);
background(50);
noStroke();
strokeWeight(15);

let x = width / 2;
let y = height / 2;

colorMode(HSB);
rectMode(CENTER);

let h = random(0, 330);

//4blokken dus 4 rect & fill functies
fill(h, 50, 75);
rect(x, y, 400, 400);

fill(h, 50, 60);
rect(x, y, 300, 300);

fill(h, 50, 45);
rect(x, y, 200, 200);

fill(h, 50, 30);
rect(x, y, 100, 100);
