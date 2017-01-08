var primes = [2];
var counter = 0;
var high = 1;
var iteration = 0;
var xDir = 1;
var yDir = 0;
var x = 0;
var y = 0;
var fc = 0;
var cm = 0;
var colorButton;

var loopNum = 1000;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  colorButton = createButton("Color Mode");
  colorButton.mousePressed(changeColorMode);
}

function changeColorMode()
{
  fc = 0;
  cm = 1-cm;
  background(0);
  x = 0;
  y = 0;
  xDir = 1;
  yDir = 0;
  counter = 0; 
  high = 1; 
  iteration = 0;

}

function draw()
{
  translate(width/2,height/2);
  for(var k = 0; k < loopNum; k++)
  {
    fc++;
    var tracker = true;
    for(var i = 2; primes[i] * primes[i] <= fc; i++)
    {
      tracker = true;
      if(fc % primes[i] == 0)
      {
        tracker = false;
        break;
      }
    }

    if(tracker)
    {
      primes.push(fc);
      if(cm === 0)
      {
        stroke(fc%360,100,100);
      }
      else
      {
        stroke(360);
      }
      point(x,y);
    }

    counter++;
    x += xDir;
    y += yDir;

    if(counter === high)
    {
      var temp = yDir;
      yDir = -xDir
      xDir = temp;
      counter = 0;
      iteration++;
      if(iteration == 2)
      {
        iteration = 0;
        high++;
      }
    }
  }
}
