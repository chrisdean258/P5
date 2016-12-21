const max = 1000;

function setup()
{
  canvas = createCanvas(500,500);
  canvas.parent("#canvasDIV");

  associateDOM();

  calculateNoise(.01);
  render(1-landSlider.value(), 1-desertSlider.value());
}
