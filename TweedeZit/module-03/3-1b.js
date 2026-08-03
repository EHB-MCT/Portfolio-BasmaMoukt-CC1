createCanvas(400, 400);
background(255);
noStroke();
colorMode(HSB);

for (let i = 2; i < 15; i++) {
	// loop van 15x
	fill(i * 7); // kleur
	circle(50, i * 25, 50); // circel grootte + richting
}
