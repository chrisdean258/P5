var drawMode;
var loopNumber;

var masses = [];
var springs = [];
var pauseButton;

var addSpring;
var addMass;


function setup() 
{
  //creation of the canvas
  var canvas = createCanvas(600,600);
  canvas.parent("#canvas");
  background(250);

  //controls how many simulations are run between rendering
  loopNumber = createSlider(1,1000,1,1);
  loopNumber.parent("#loopNumber");

  //controls whether the path of the masses is rendered of the spring and ball system
  drawMode = createSlider(0,1,1,1);
  drawMode.parent("#drawMode");

  //button to start and pause the simulation
  createElement('br').parent("#canvas");
  pauseButton = createButton("Start", "paused");
  pauseButton.parent("#canvas");
  pauseButton.style("width", "100px");
  pauseButton.style("margin-left", (width - 100)/2 + "px");
  pauseButton.mousePressed(pauseButtonPressed);

  //button to add a spring to the simulation
  addSpring = createButton("Add Spring");
  addSpring.parent("#springs");
  addSpring.mousePressed(addSpringToSim);

  //button to add mass to the simulation
  addMass = createButton("Add Mass");
  addMass.parent("#masses")
  addMass.mousePressed(addMassToSim);
}


function draw() 
{
  if(pauseButton.value() === "playing")
  {
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


