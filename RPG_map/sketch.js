var noiseArr = [];
var sliderWidth;
var sliderHeight;
const max = 1000;
var updateCanvas = true;

function setup()
{
  canvas = createCanvas(500,500);
  canvas.parent("#canvasDIV");

  associateDOM();

  calculateNoise(.01)
}

function draw()//loop draws the canvas
{
  if(updateCanvas)
  {
    render(1-landSlider.value(), 1-desertSlider.value());
    updateCanvas = false;
  }
}
