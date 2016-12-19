var you;
var gaurds = [];
var numGaurds = 10;
var lives = 3;
var mult = 1;

function setup() {
  createCanvas(500,500);
  you = new person(10,0,0,0,0);
  for(var i = 0; i < numGaurds; i++)
  {
      gaurds.push(new person(10,random(width),random(height)));
  }
}

function keyTyped()
{
  if(key === 'w')
    you.yVelocity = -2;
  if(key === 'a')
    you.xVelocity = -2;
  if(key === 's')
    you.yVelocity = 2;
  if(key === 'd')
    you.xVelocity = 2;
}

function draw() {
  background(250);
  if (!keyIsPressed)
  {
    you.xVelocity = 0;
    you.yVelocity = 0;
  }

  for(var i = 0; i < gaurds.length; i++)
  {
    gaurds[i].show();
    gaurds[i].noiseUpdate(mult);
  }

  noStroke();
  fill(0,255,0);
  rect(width - 20, height-20, 20,20);

  you.update();
  you.check();
  you.show(95);



}
