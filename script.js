// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(0);
//   translate(200, 200);
//   rotate(-90);

//   let hr = hour();
//   let mn = minute();
//   let sc = second();

//   strokeWeight(8);
//   stroke(255, 100, 150);
//   noFill();
//   let secondAngle = map(sc, 0, 60, 0, 360);
//   arc(0, 0, 300, 300, 0, secondAngle);

//   stroke(150, 100, 255);
//   let minuteAngle = map(mn, 0, 60, 0, 360);
//   arc(0, 0, 280, 280, 0, minuteAngle);

//   stroke(150, 255, 100);
//   let hourAngle = map(hr % 12, 0, 12, 0, 360);
//   arc(0, 0, 260, 260, 0, hourAngle);

//   push();
//   rotate(secondAngle);
//   stroke(255, 100, 150);
//   line(0, 0, 100, 0);
//   pop();

//   push();
//   rotate(minuteAngle);
//   stroke(150, 100, 255);
//   line(0, 0, 75, 0);
//   pop();

//   push();
//   rotate(hourAngle);
//   stroke(150, 255, 100);
//   line(0, 0, 50, 0);
//   pop();

//   stroke(255);
//   point(0, 0);
// }
// Original code, I took a few ideas from this code

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  
  let yr = year ();
  let mth = month();
  let dy = day();
  let hr = hour();
  
  if (hr > 12) {
    hour()-11
  }
  // I wasn't able to get this to work after much effort, but I thought I'd leave it in to show my attempt to create a conditional that made the time in regular form rather than it being shown in military time
  let mn = minute();
  let sc = second();

  fill(50);
  rect(60,60,405,255,20);

  fill("black");
  rect(75,75,375,225,20);
  
  fill("gray");
  ellipse(260,185,265,140);

  noStroke();

    fill("red");
    noStroke();
    textFont('Georgia')
    textSize(45);
    text(hr + ':' + mn + ':' + sc, 185, 195);
    textSize(25);
    text(mth + '/' + dy + '/' + yr, 100, 100);
}