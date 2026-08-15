function setup() {
	createCanvas(400, 400);
	background("#000");
}

function draw() {
	noStroke();
	fill("grey");
	square(50, 50, 300);

	fill("#979696");
	square(50, 50, 250);

	fill("#b4b1b1");
	square(100, 50, 200);

	fill("#cdcbcb");
	square(150, 100, 150);

	fill("#e0dede");
	square(150, 150, 100);
}
