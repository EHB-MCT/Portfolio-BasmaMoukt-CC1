createCanvas(600, 400);
background("#add8e6");
noStroke();
colorMode(HSB);

let barWidth = 10; // bar breedte
let margin = 5; // ruimte tussen de bars
let amount = width - margin / (barWidth + margin);

for (let i = 0; i < amount; i++) {
	//loop
	let randomHeight = noise(i / 5) * height; // verschillende hoogtes
	fill("white"); // kleur
	rect(i * (barWidth + margin), height - randomHeight, barWidth, randomHeight);
}
