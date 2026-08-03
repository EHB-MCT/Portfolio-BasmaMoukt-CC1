function setup() {
	createCanvas(400, 400);
	background("#FFF");

	fill("red");
	square(0, 0, 200); // ipv square kan je ook rect gebruiken, maar dan moet je de breedte en hoogte meegeven
	noStroke();
	fill("#FFF");
	circle(100, 100, 150);

	fill("$fff");
	square(200, 0, 200);
	fill("red");
	circle(300, 100, 150);

	fill("fff");
	square(0, 200, 200);
	fill("blue");
	circle(100, 300, 150);

	fill("blue");
	square(200, 200, 200);
	fill("#FFF");
	circle(300, 300, 150);
}
