const decay = .99999;
var springs = [];
var masses = [];
function setup() 
{
  createCanvas(600,600);
  springs[0] = new spring(100,100,200,200,1,100);
  springs[1] = new spring(100,300,200,200,1,100);
  springs[2] = new spring(400,400,200,200,1,100);
  masses[0] = new mass(200,200,5);

  springs[0].attached = masses[0];
  springs[1].attached = masses[0];
  springs[2].attached = masses[0];
}


function draw() 
{
  for(var j = 0; j < 25; j++){
  //background(250);
  for(var i = 0; i < springs.length; i++)
  {
    springs[i].update1();
  }  
  for(var i = 0; i < masses.length; i++)
  {
    masses[i].update();
    //masses[i].show();
    strokeWeight(1);
    point(masses[i].x,masses[i].y);
  }
  for(var i = 0; i < springs.length; i++)
  {
    springs[i].update2();
    //springs[i].show();
  }  
}
}


