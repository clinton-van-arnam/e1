let rotation=0;
let speed = 0.25;
let numberlines=800;
let length = 200;
let thickness = 80;
let npoints = 80;
let lineStroke=.8;
let v;
var r1=length;   //Radio1 
var r2=135;  //Radio2
function setup() {

  createCanvas(500, 500);
}

function draw() {
  let num=100;

  background(255);
  translate(width / 2, height / 2);
print(rotation);
strokeWeight(2);

  push();
  rotate(radians(rotation));
  star(0, 0, thickness, length, npoints);
  pop();

   push();
  rotate(-radians(rotation));
  star(0, 0, thickness, length, npoints);
  pop();
 
  push();
  rotate(-radians(rotation/2));
  for (var i = 0; i < numberlines; i+=1) {
    var x1 = (r1)*cos(i*2*PI/numberlines);
    var y1 = (r1)*sin(i*2*PI/numberlines);
    var x2 = (r2)*cos(i*2*PI/numberlines);
    var y2 = (r2)*sin(i*2*PI/numberlines);
		strokeWeight (lineStroke);
		stroke(20);
    line(x1, y1, x2, y2);
	}
pop();


 rotation=rotation+speed;

}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
