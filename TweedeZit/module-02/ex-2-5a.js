createCanvas(innerWidth, innerHeight);
colorMode(HSB, 360, 100, 100);
background(15, 0, 95);

//control surface
let margin = random(0, 100); // random margin van de lijnen bij refresh
let y = width / 2; // Set y to half of the canvas width
let x = height / 2; // Set x to half of the canvas width
let r = min(width, height) * 0.25; // Stel r in als een kwart van de kleinste waarde tussen breedte en hoogte
let baseHue = 210, // Basis kleurtoon (hue) ingesteld op 210 graden
	sat = 70; // Verzadiging van de kleur ingesteld op 70%

noStroke();
fill(baseHue, sat, 70);
circle(x, y, r * 2);
fill(baseHue + 130, sat, 90); //vul rechthoek
// Teken een rechthoek bovenaan het canvas met afgeronde hoeken
rect(margin, margin, width - 2 * margin, 18, 12);
// Vul rechthoek met een verschoven kleurtoon (-50) en iets lagere helderheid
fill(baseHue - 50, sat, 80);
// Teken een rechthoek onderaan het canvas met afgeronde hoeken
rect(margin, height - margin - 18, width - 2 * margin, 18, 12);
