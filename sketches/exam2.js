createCanvas(600, 600);
background(255);

// bottom half
fill("navy");
rect(0, height / 2, width, height / 2);

for (let i = 0; i < 150; i++) {
	let y = 5 + i * 5;
	let x = width / 2;
	line(x - i * 5, y, x + i * 5, y);
}

// top half
fill("red");
rect(0, 0, width, height / 2);
