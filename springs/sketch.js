var drawMode;
var loopNumber;

var masses = [];
var springs = [];
var pauseButton;


function setup() 
{
  var canvas = createCanvas(600,600);
  canvas.parent("#canvas");
  background(250);

  loopNumber = createSlider(1,1000,1,1);
  loopNumber.parent("#loopNumber");

  drawMode = createSlider(0,1,1,1);
  drawMode.parent("#drawMode");

  createElement('br').parent("#canvas");
  pauseButton = createButton("Start", "paused");
  pauseButton.parent("#canvas");
  pauseButton.style("width", "100px");
  pauseButton.style("margin-left", (width - 100)/2 + "px");
  pauseButton.mousePressed(pauseButtonPressed);
}


function draw() 
{
  if(pauseButton.value() === "playing")
  {
    console.log("hi");
    if(drawMode.value == 1) 
      background(250);

    for(var j =0; j * j < loopNumber.value(); j++)
    {
      for(var i = 0; i < masses.length; i++)
      {
        masses[i].update()
        if(drawMode.value() == 1)
        {
          masses[i].show;
        }
        else 
        {
          point(masses[i].x, masses[i].y);
        }
      }
      for(var i = 0; i < springs.length; i++)
      {
        springs[i].update()
        if(drawMode.value() == 1)
        {
          springs[i].show;
        }
      }
    }
  }
}


