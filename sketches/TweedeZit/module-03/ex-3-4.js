createCanvas(400, 400);
background(255);

// Pick a random starting x position between 20 and 100
let x = random(20, 100);

// Outer loop: keep drawing vertical lines until x reaches the canvas width
while (x < width) {
	// Draw a vertical line from top (0) to bottom (height) at position x
	line(x, 0, x, height);

	// Pick a random starting y position between 0 and 50
	let y = random(0, 50);

	// Inner loop: keep drawing shapes until y reaches the canvas height
	while (y < height) {
		// Random offsets for control points of the bezier curve
		let cx = random(-10, 10);
		let cy = random(-10, 10);

		// Draw a bezier curve centered around (x, y)
		// Control points are shifted by cx and cy to make the curve wiggly
		bezier(x, y, x + cx, y - 10 + cy, x + cx, y + 10 + cy, x, y);

		// Move y down by a random step (0–50 pixels)
		y += random(0, 50);
	}

	// Move x to the right by a random step (20–100 pixels)
	x += random(20, 100);
}
