createCanvas(innerWidth, innerHeight);
colorMode(HSB, 360, 100, 100);
background(15, 0, 95);

//control surface
let margin = random(0, 100);
let y = width / 2;
let x = height / 2;
let r = min(width, height) * 0.25;
let baseHue = 210,
	sat = 70;

noStroke();
fill(baseHue, sat, 70);
circle(x, y, r * 2);

// --- Determine initials using substring + indexOf ---
let fullName = "Basma Mouktaoui Erramah"; // replace with your name
let space1 = fullName.indexOf(" "); // first space
let space2 = fullName.indexOf(" ", space1 + 1); // second space

// First initial
let firstInitial = fullName.substring(0, 1);
// Second initial (after first space)
let secondInitial = fullName.substring(space1 + 1, space1 + 2);
// Third initial (after second space, if exists)
let thirdInitial =
	space2 !== -1 ? fullName.substring(space2 + 1, space2 + 2) : "";

// Combine initials
let initials = firstInitial + secondInitial + thirdInitial;

// --- Place initials in the circle ---
fill(0, 0, 100); // white text
textSize(r * 0.6);
textAlign(CENTER, CENTER);
text(initials, x, y);

fill(baseHue + 130, sat, 90);
rect(margin, margin, width - 2 * margin, 18, 12);

fill(baseHue - 50, sat, 80);
rect(margin, height - margin - 18, width - 2 * margin, 18, 12);
