var inputDataTable;
var maxSize;
function setup()
{
  inputDataTable = select("#inputData");
  maxSize = floor(max(windowWidth - inputDataTable.width,windowHeight));
  canvas = createCanvas(windowWidth - inputDataTable.width,windowHeight);
  canvas.parent("#canvasDIV");

  associateDOM();

  calculateNoise(.01);
  render(1-landSlider.value(), 1-desertSlider.value());
}

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

var landSlider;
var landText;
var desertSlider;
var desertText;
var detailSlider;

function associateDOM()
{
  detailSlider = select("#detailSlider");
  detailText = select("#detailText");
  detailSlider.value(4);
  detailText.value(detailSlider.value()+"");
  detailSlider.other = detailText;
  detailText.other = detailSlider;
  detailText.changed(valChangedCalc);
  detailSlider.changed(valChangedCalc);

  landSlider = select("#landSlider");
  landText = select("#landText");
  landSlider.value(.5);
  landText.value(landSlider.value()+"");
  landSlider.other = landText;
  landText.other = landSlider;
  landText.input(valChangedRender);
  landSlider.input(valChangedRender);

  desertSlider = select("#desertSlider");
  desertText = select("#desertText");
  desertSlider.value(.33);
  desertText.value(desertSlider.value()+"");
  desertSlider.other = desertText;
  desertText.other = desertSlider;
  desertText.input(valChangedRender);
  desertSlider.input(valChangedRender);
}

function valChangedRender()
{
  this.other.value(this.value());
  render();
}
function valChangedCalc()
{
  this.other.value(this.value());
  calculateNoise()
  render();
}
