createCanvas(400, 400);
noStroke();
colorMode(HSB);

let w = random(10, width / 2);
let h = random(10, height / 2);
let x = 0;
let y = 0;

// As long as y is smaller than the canvas height, keep looping vertically
while (y < height) {
	// Reset x to 0 at the start of each row
	x = 0;
	// As long as x is smaller than the canvas width, keep looping horizontally
	while (x < width) {
		// Pick a random color (hue between 0–360, saturation 60, brightness 100)
		fill(random(0, 360), 60, 100);
		// Draw a rectangle at position (x, y) with width w+1 and height h+1
		rect(x, y, w + 1, h + 1);
		// Move x forward by the current rectangle width
		x += w;
		// Randomize the next rectangle width (between 1/4 of canvas width and full width)
		w = random(width / 4, width);
	}

	// Move y down by the current rectangle height
	y += h;
	// Randomize the next rectangle height (between 0 and 1/3 of canvas height)
	h = random(0, height / 3);
	// Print the current y value (for debugging or tracking progress)
	output(y);
}
