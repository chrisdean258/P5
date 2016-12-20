var you;
var gaurds = [];
var numGaurds = 10;
var lives = 3;
var mult = 1;
var level = 1;

function setup() {
  createCanvas(500,500);
  you = new person(10,0,0,0,0);
  for(var i = 0; i < numGaurds; i++)
  {
      gaurds.push(new person(10,random(50,width),random(50,height)));
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
  if(lives > 0)
  {
    background(250);
    if (!keyIsPressed)
    {
      you.xVelocity = 0;
      you.yVelocity = 0;
    }

    for(var i = 0; i < gaurds.length; i++)
    {
      gaurds[i].noiseUpdate(mult);
      gaurds[i].check2();
      gaurds[i].show();
    }

    noStroke();
    fill(0,255,0);
    rect(width - 20, height-20, 20,20);

    you.update();
    for(var i = 0; i < gaurds.length; i++)
    {
      if(touching(you,gaurds[i]))
      {
        lives--;
        you.x = you.y = 0;
        for(var i = 0; i < gaurds.length; i++)
        {
          gaurds[i].x = random(50,width);
          gaurds[i].y = random(50,height);
        }
      }
    }
    you.check();
    you.show(95);
    var s = "Level " + level;
    var t = "Lives: " + lives;
    textSize(10);
    fill(0);
    text(s, 10, 10);
    text(t, width-50, 10);
  }
  else
  {
    background(0);
    fill(255);
    text("Game Over", width/2 - 20, height/2);
  }
}

function touching(a,b)
{
  return (abs(a.x - b.x) < 10 && abs(a.y-b.y) < 10);
}
