let size = 0;
let h = 0;
let sizeDiff = 1;
let shape = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(0, 0, 10);
	size += sizeDiff;

	size = constrain(size, 0, width * 2); // keep size reasonable

	//shape
	fill(h, 100, 100);
	if (shape) {
		circle(width / 2, height / 2, size);
	} else {
		rect(width / 2, height / 2, size, size);
	}
	//mouse interactions
	k1(mouseX / 100);
	k2(map(mouseY, 0, height, 0, 360));
}

function keyPressed() {
	if (key === "a" || key === "A") {
		pad1();
	}
	if (key === "z" || key === "Z") {
		pad2();
	}
}

function pad1() {
	size = 0;
}

function pad2() {
	shape = !shape;
}

function k1(speed) {
	// keeps animation under control - constrain = toegevoegd door AI
	sizeDiff = constrain(speed, 0.1, 10);
}

function k2(hue) {
	// color controller - keeps color values valid / constrain = toegevoegd door AI
	h = constrain(hue, 0, 360);
}

// function receivedOSC(address, args) {
// 	let values = oscArgsToArray(args);
// 	//receives OSC messages for different addresses
// 	//the pads are buttons, the k's are knobs
// 	switch (address) {
// 		case "/pad1":
// 			pad1();
// 			break;
// 		case "/pad2":
// 			pad2();
// 			break;
// 		case "/pad3":
// 			break;
// 		case "/pad4":
// 			break;
// 		case "/pad5":
// 			break;
// 		case "/pad6":
// 			break;
// 		case "/pad7":
// 			break;
// 		case "/pad8":
// 			break;
// 		case "/k1":
// 			k1(values[0] / 10);
// 			break;
// 		case "/k2":
// 			k2((values[0] / 127) * 360);
// 			break;
// 		case "/k3":
// 			break;
// 		case "/k4":
// 			break;
// 		case "/k5":
// 			break;
// 		case "/k6":
// 			break;
// 		case "/k7":
// 			break;
// 		case "/k8":
// 			break;
// 	}
// }
