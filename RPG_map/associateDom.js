var landSlider;
var landText;
var desertSlider;
var desertText;
var detailSlider;
var zoomSlider;

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

  zoomSlider = select("#zoomSlider");
  zoomText = select("#zoomText");
  zoomSlider.value(.01);
  zoomText.value(zoomSlider.value()+"");
  zoomSlider.other = zoomText;
  zoomText.other = zoomSlider;
  zoomText.changed(valChangedCalc);
  zoomSlider.changed(valChangedCalc);
  zoomText.hide();

  ySlider = select("#ySlider");
  yText = select("#yText");
  ySlider.value(0);
  yText.value(ySlider.value()+"");
  ySlider.other = yText;
  yText.other = ySlider;
  yText.changed(valChangedCalc);
  ySlider.changed(valChangedCalc);
  //yText.hide();

  xSlider = select("#xSlider");
  xText = select("#xText");
  xSlider.value(0);
  xText.value(xSlider.value()+"");
  xSlider.other = xText;
  xText.other = xSlider;
  xText.changed(valChangedCalc);
  xSlider.changed(valChangedCalc);
  //xText.hide();

  zSlider = select("#zSlider");
  zText = select("#zText");
  zSlider.value(.5);
  zText.value(zSlider.value()+"");
  zSlider.other = zText;
  zText.other = zSlider;
  zText.changed(valChangedCalc);
  zSlider.changed(valChangedCalc);


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
  if(this.other != undefined)
  {
    this.other.value(this.value());
  }
  render();
}
function valChangedCalc()
{
  if(this.other != undefined)
  {
    this.other.value(this.value());
  }
  calculateNoise()
  render();
}
