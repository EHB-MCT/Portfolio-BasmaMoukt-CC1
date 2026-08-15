createCanvas(600, 400);
background("lightblue");
noFill();
noStroke();

let xS = width / 2;
let yS = height / 2;
fill("yellow");
circle(xS, 200, yS - 90); //zon

let x = random(300);
let y = random(300);

fill(120);
circle(x, y, 100); //midden
circle(x - 50, y + 50 - 30, 60); //links
rect(x - 50, y, 100, 50);
circle(x + 50, y + 50 - 35, 70); //rechts
