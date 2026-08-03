function setup() {
	createCanvas(400, 400);
	background("#FFF");

	// Size of each square (400 / 4 = 100)
	let size = 100; //each square is 100 x 100

	// Loop through 4 rows
	for (let y = 0; y < 4; y++) {
		// Loop through 4 columns
		for (let x = 0; x < 4; x++) {
			// Draw a square at the correct position
			// x * size = column position
			// y * size = row position
			rect(x * size, y * size, size, size);
		}
	}
}
