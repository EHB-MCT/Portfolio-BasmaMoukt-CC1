function setup() {
	createCanvas(400, 400);
	background("#FFF");
}

function draw() {
	rectMode("center"); // start vanaf het midden
	noStroke();

	fill(200);
	rect(200, 200, 300);

	fill(150);
	rect(200, 200, 200);

	fill(100);
	rect(200, 200, 100);
}
