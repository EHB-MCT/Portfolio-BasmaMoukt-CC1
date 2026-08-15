function setup() {
	createCanvas(500, 500);
	background("black");
}

function draw() {
	background("black");

	fill("white");
	circle(250, 250, 250);

	push();
	translate(250, 250);
	rotate(PI / 4); // 45 degrees / use frameCount * 0.01 for animation
	rectMode(CENTER);
	fill("black");
	square(0, 0, 120);
	pop();

	// //fill gebruiken voor de kleur van de vierkant!
}
