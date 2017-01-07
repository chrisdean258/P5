const decay = 1;
var dm;
var loopNum;
var springs = [];
var masses = [];

var addMass;
var addSpring;

function setup() 
{
  canvas = createCanvas(600,600);
  canvas.parent("#canvas");
  background(250);

  dm = createSlider(0,1,1,1);
  dm.changed(bg);
  dm.parent("#dmSlider")

  loopNum = createSlider(0,100,1,1);
  loopNum.parent("#loopNum");

  addSpring = createButton("Add Spring");
  addSpring.parent("#springs");
  addSpring.mousePressed(add_spring);

  addMass = createButton("Add Mass");
  addMass.parent("#masses");
}
function bg()
{
  background(250);
}
function add_spring()
{
  var spr = new spring(100,100,200,200,1,100);
  springs.push(spr);
}

function draw() 
{
  var drawmode = dm.value();

  for(var j = 0; j < loopNum.value()*loopNum.value(); j++){
    for(var i = 0; i < springs.length; i++)
    {
      springs[i].update1();
    }  
    for(var i = 0; i < masses.length; i++)
    {
      masses[i].update();
      strokeWeight(1);
    }
    for(var i = 0; i < springs.length; i++)
    {
      springs[i].update2();
    }

    if(drawmode === 1)
    {
      for(var i = 0; i < masses.length; i++)
      {
        point(masses[i].x,masses[i].y);
      }
    }
    else
    {
      background(250);
      for(var i = 0; i < springs.length; i++)
      {
        springs[i].show();
      }
      for(var i = 0; i < masses.length; i++)
      {
        masses[i].show();
      }
    }
  }
}


