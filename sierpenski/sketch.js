var triangles = [];
var layer =0;
function setup() {
  createCanvas(600, 600);
  background(250);
  var wOffset = width/20;
  var hOffset = ((2-sqrt(3))*height + 2*sqrt(3)*wOffset)/4;

  triangles[0] = new tri(width/2, hOffset, wOffset, height - hOffset, width - wOffset, height-hOffset);
}

function mouseClicked()
{
  if(layer < 8)
  {
    layer++;
    for(var i = triangles.length-1; i >= 0; i--)
    {
      if(!triangles[i].nextLayerDrawn)
      {
        var nextLayer = triangles[i].next();
          for(j = 0 ; j < nextLayer.length; j++)
          {
            triangles.push(nextLayer[j]);
          }
        triangles[i].nextLayerDrawn = true;
      }
    }
  }
}

function draw() {
  background(250);
  for(i = 0; i <triangles.length; i++)
  {
    triangles[i].show();
  }
}
