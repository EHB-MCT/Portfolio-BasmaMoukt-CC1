function setup() {
	createCanvas(600, 400);
	background("lightblue");
	noFill();
	noStroke();
}

let x = random(600);
let y = random(400);

function draw() {
	let xS = width / 2;
	let yS = height / 2;

	fill("yellow");
	circle(xS, 200, yS - 90); //zon

	fill(120);
	circle(x, y, 100); //midden
	circle(x - 50, y + 50 - 30, 60); //links
	rect(x - 50, y, 100, 50);
	circle(x + 50, y + 50 - 35, 70); //rechts

	fill("red");
	let xR = random(600);
	let yR = random(400);
	rect(x, y, 100);
	noLoop();

	fill("blue");
	let xT = random(600);
	let yT = random(400);
	rect(xT, yT, 120);
	noLoop();

	fill("green");
	let xB = random(600);
	let yB = random(400);
	rect(xB, yB, 90);
	noLoop();

	fill("orange");
	let xO = random(600);
	let yO = random(400);
	rect(xO, yO, 50);
	noLoop();
}
