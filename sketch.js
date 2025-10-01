function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(114, 168, 176);
  //sun in top-right corner
  fill("orange");
  circle(550, 50, 100);
 
  //grass on bottom half
  fill("green");
  rect(0, 200, 600, 200);
 
  //emojis
  textSize(75)
  text("🥶", 100, 250) //flower
  text("❄️", mouseX, mouseY) //ladybug
}