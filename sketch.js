function setup() {
  createCanvas(400, 400);
}
x=0
function draw() {
  background(240);
	let c = color(255, 204, 0); // Define color 'c'
	fill(c); // Use color variable 'c' as fill color
	
  ellipse(190,180,300,300);
  
	let a = color(0,0,0); // Define color 'c'
	fill(a); // Use color variable 'c' as fill color
	ellipse(150,150,60,100);
	ellipse(230,150,60,100);
  // line(85,135,35,95);
  // line(305,145,360,95);
  // line(170,150,260,150);
  // rect(215,115,90,90);
  // rect(85,115,90,90);
  noFill();
	arc(192,240,120,100,6.5,3);
  strokeWeight(5)
}
// var x=0
// function draw(){
// 	ellipse(x, height/2, 20,30);
// 	x = x+3;
// }