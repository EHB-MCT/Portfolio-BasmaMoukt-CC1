function setup() {
	createCanvas(400, 400);
	background("white");
	noStroke();
}

//linker kant
function draw() {
	for (let i = 0; i < 10; i++) {
		let x = random(height / 2);
		let y = random(width / 2);
		(random(height * 0.06, height * 0.1),
			color(random(40, 120), random(80, 160), random(160, 220)));
	}
}
