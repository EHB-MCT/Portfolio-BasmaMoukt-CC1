function setup() {
	createCanvas(400, 400);
	noStroke();
	background(400);
}

// This loop (iteratie) draws many soft shapes.
// Each iteration calls the same function with new random values.
function draw() {
	for (let i = 0; i < 40; i++) {
		// Random position - left
		let x = random(0, width / 2);
		let y = random(0, height);
		let size = random(height * 0.03, height * 0.1);
		let col = color(random(80, 110), random(120, 200), random(10, 200));
		drawShape(x, y, size, col, "soft");
	}

	// rechts - scherpen vormen
	for (let i = 0; i < 40; i++) {
		//  Random position - right
		let x = random(width / 2, width);
		let y = random(0, height);
		//scale
		let size = random(height * 0.2, height * 0.22);
		// Controlled randomness: warm, aggressive color palette
		let col = color(random(180, 255), random(40, 120), random(0, 30));
		drawShape(x, y, size, col, "sharp");
	}

	noLoop();
}

// This loop (iteratie) draws many soft shapes.
// Each iteration calls the same function with new random values.
function drawShape(x, y, size, col, type) {
	fill(col);

	if (type === "soft") {
		//links - ellipse blob
		// Soft shapes = ellipses with slight random distortion
		ellipse(x, y, size * random(2.5, 2), size);
	}

	if (type === "sharp") {
		// Sharp = triangle with random angles
		// This creates jagged, angular forms
		let x1 = x + random(-size, size);
		let y1 = y + random(-size, size);
		let x2 = x + random(-size, size);
		let y2 = y + random(-size, size);
		let x3 = x + random(-size, size);
		let y3 = y + random(-size, size);
		triangle(x1, y1, x2, y2, x3, y3);
	}
}
