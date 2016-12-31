
var objs = [];
function setup() 
{
  createCanvas(600,600);
  objs[0] = new spring(100,100,200,200,.005,150);
  objs[1] = new mass(300,300,5);
}


function draw() 
{
  background(250);
  for(var i = 0; i < objs.length; i++)
  {
    objs[i].show();
  }
}


