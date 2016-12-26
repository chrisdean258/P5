var inputDataTable;
var maxSize;
function setup()
{
  inputDataTable = select("#inputData");
  maxSize = floor(max(windowWidth - inputDataTable.width,windowHeight));
  canvas = createCanvas(windowWidth - inputDataTable.width,windowHeight);
  canvas.parent("#canvasDIV");

  associateDOM();

  calculateNoise();
  render(1-landSlider.value(), 1-desertSlider.value());
}

/*function draw()
{
  calculateNoise(zoomSlider.value(), detailSlider.value(), frameCount);
  render();
  frameRate(1);
}*/

function windowResized()
{
  if(windowWidth - inputDataTable.width > maxSize || windowHeight > maxSize)
  { 
    maxSize = floor(max(windowWidth - inputDataTable.width,windowHeight));
    calculateNoise()
  }
  canvas.resize(windowWidth - inputDataTable.width,windowHeight);
  render();
}