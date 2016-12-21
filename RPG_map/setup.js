var landSlider;
var landText;
var desertSlider;
var desertText;

function associateDOM()
{
  landSlider = select("#landSlider");
  landSlider.value(.5);
  landText = select("#landText");
  landText.value(landSlider.value()+"");
  landText.input(landTextChanged);
  landSlider.input(landSliderChanged);

  desertSlider = select("#desertSlider");
  desertSlider.value(.33);
  desertText = select("#desertText");
  desertText.value(desertSlider.value()+"");
  desertText.input(desertTextChanged);
  desertSlider.input(desertSliderChanged);



}

function landTextChanged()
{
  landSlider.value(landText.value());
  updateCanvas = true;
}
function landSliderChanged()
{
  landText.value(landSlider.value()+"");
  updateCanvas = true;
}

function desertTextChanged()
{
  desertSlider.value(desertText.value());
  updateCanvas = true;
}
function desertSliderChanged()
{
  desertText.value(desertSlider.value()+"");
  updateCanvas = true;
}
