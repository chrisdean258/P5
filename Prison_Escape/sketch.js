var you;

function setup() {
  createCanvas(500,500);
  you = new person(10,0,0,0,0);
  //you.xVelocity = 1;
  //you.yVelocity = 2;
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


  you.update();
  you.show(95);

}
