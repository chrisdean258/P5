var stars = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 100 ; i++)
  {
    stars.push(new star());
  }
}

function windowResized()
{
  stars = [];
  resizeCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 100 ; i++)
  {
    stars.push(new star());
  }
}

function mouseClicked()
{
  windowResized();
}

function draw() {
  background(0);
  var mult = 1;
  for(var i = 0; i < stars.length; i++)
  {
    if(key === ' ')
    {
      mult = 2;
    }
    else if(keyCode === SHIFT)
    {
      mult = .5;
    }
    if(keyCode === LEFT_ARROW)
    {
      stars[i].spin(.01);
    }
    if(keyCode === RIGHT_ARROW)
    {
      stars[i].spin(-.01);
    }
    stars[i].update(mult);
    stars[i].show();
  }
}