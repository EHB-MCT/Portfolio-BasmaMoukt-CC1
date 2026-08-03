function setup() {
	createCanvas(400, 400);
	background("white");

	circle(200, 200, 300);
	fill("white");

	//diagonal line (left corner to right corner)
	line(0, 0, width, height);

	//diagonal line (right corner to left bottom corner)
	line(width, 0, 0, height);
}
