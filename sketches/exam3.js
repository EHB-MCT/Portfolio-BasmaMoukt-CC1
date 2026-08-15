function setup() {
	createCanvas(600, 400);
	background("#0c9cc1");
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

	fill(90);
	let xR = random(600);
	let yR = random(400);
	circle(xR, yR, 100); //midden
	circle(xR - 50, yR + 50 - 30, 60); //links
	rect(xR - 50, yR, 100, 50);
	circle(xR + 50, yR + 50 - 35, 70); //rechts
	noLoop();

	fill(200);
	let xT = random(600);
	let yT = random(400);
	circle(xT, yT, 100); //midden
	circle(xT - 50, yT + 50 - 30, 60); //links
	rect(xT - 50, yT, 100, 50);
	circle(xT + 50, yT + 50 - 35, 70); //rechts
	noLoop();

	fill(140);
	let xB = random(600);
	let yB = random(400);
	circle(xB, yB, 100); //midden
	circle(xB - 50, yB + 50 - 30, 60); //links
	rect(xB - 50, yB, 100, 50);
	circle(xB + 50, yB + 50 - 35, 70); //rechts
	noLoop();

	fill("130");
	let xO = random(600);
	let yO = random(400);
	circle(xO, yO, 100); //midden
	circle(xO - 50, yO + 50 - 20, 40); //links
	rect(xO - 50, yO, 100, 50);
	circle(xO + 50, yO + 50 - 35, 70); //rechts
	noLoop();

	fill("130");
	let x6 = random(600);
	let y6 = random(400);
	circle(x6, y6, 100); //midden
	circle(x6 - 50, y6 + 50 - 20, 40); //links
	rect(x6 - 50, y6, 100, 50);
	circle(x6 + 50, y6 + 50 - 35, 70); //rechts
	noLoop();
}
