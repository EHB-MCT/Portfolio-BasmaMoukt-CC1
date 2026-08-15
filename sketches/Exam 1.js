createCanvas(600, 400);
background(0);
textAlign(CENTER, CENTER);
textFont("Consolas");
textSize(12);

let allChars = "";
for (let i = 0; i < 128; i++) {
	allChars += String.fromCharCode(i);
}

fill(0, 255, 0); // green text

for (let i = 0; i < 60; i++) {
	let r = round(random(0, 128));
	let char = allChars.substring(r, r + 1);
	text(char, i * 10, 20); // horizontal
}
