const max = 1000;

function setup()
{
  canvas = createCanvas(500,500);
  canvas.parent("#canvasDIV");

  associateDOM();

  calculateNoise(.01);
  render(1-landSlider.value(), 1-desertSlider.value());
}

var landSlider;
var landText;
var desertSlider;
var desertText;

function associateDOM()
{
  landSlider = select("#landSlider");
  landText = select("#landText");
  landSlider.value(.5);
  landText.value(landSlider.value()+"");
  landSlider.other = landText;
  landText.other = landSlider;
  landText.input(valChanged);
  landSlider.input(valChanged);

  desertSlider = select("#desertSlider");
  desertText = select("#desertText");
  desertSlider.value(.33);
  desertText.value(desertSlider.value()+"");
  desertSlider.other = desertText;
  desertText.other = desertSlider;
  desertText.input(valChanged);
  desertSlider.input(valChanged);



}

function valChanged()
{
  this.other.value(this.value());
  render(1-landSlider.value(), 1-desertSlider.value());
}
