function setup() {
	createCanvas(400,400);
}

var xOffset;
var yOffset;

function draw() {
	background(250);
	
	//outside the eyes
	fill(255);
	ellipse(width/4, height/2, width/4, height/3);
	ellipse(3*width/4, height/2, width/4, height/3);
	
	//pupil
	if (mouseX >= 0 && mouseX <= width )
	{
	  xOffset = map(mouseX, 0, width, -height/8 + 25, height/8-25);
	}
	if(mouseY >=0 && mouseY <= height)
	{
	  yOffset = map(mouseY, 0, width, -height/6 + 25, height/6-25);
	}
	
	fill(0);
	ellipse(width/4+xOffset, height/2 + yOffset, 25, 25);
	ellipse(3*width/4+xOffset, height/2 + yOffset, 25, 25);
	
	//smile
	noFill();
	curve(0,0, width/4,3*height/4, 3*width/4,3*height/4,width,0);
}