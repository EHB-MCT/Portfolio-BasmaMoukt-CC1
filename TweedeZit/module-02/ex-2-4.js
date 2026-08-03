createCanvas(400, 400);
colorMode(HSB);
noStroke();
fill(180, 75, 50); // kleur onderste rechthoek
background(180, 75, 75); // achtergrond voor bovenste kleur

let y = 200;
let waveHeight = 100; // golf hoogte

rect(0, y, 400, height - y); //onderste rechthoek
ellipse(0, y, 100, waveHeight);
fill(180, 75, 75);
ellipse(100, y, 100, waveHeight);
fill(180, 75, 50);
ellipse(200, y, 100, waveHeight);
fill(180, 75, 75);
ellipse(300, y, 100, waveHeight);
fill(180, 75, 50);
ellipse(400, y, 100, waveHeight);
