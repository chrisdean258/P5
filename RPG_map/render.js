var noiseArr = [];
//const maxSize = 1000;
function render(land = 1-landSlider.value(), desert = 1-desertSlider.value())
{
  loadPixels();
  for(var i = 0; i < width; i++)
  {
    for(var j = 0; j < height; j++)
    {
      var pixelIndex = (i + j * width) * 4;
      var noiseIndex = i*maxSize + j;
      pixels[pixelIndex + 0] = 0;
      pixels[pixelIndex + 1] = 0;
      pixels[pixelIndex + 2] = 0;
      pixels[pixelIndex + 3] = 255;
      if(noiseArr[noiseIndex] < land)
      {
        pixels[pixelIndex + 2] = 255;
      }
      else if(noiseArr[noiseIndex] < desert)
      {
        pixels[pixelIndex + 1] = 255;
      }
      else
      {
        pixels[pixelIndex + 0] = 255;
        pixels[pixelIndex + 1] = 255;
      }
    }
  }
  updatePixels();
}

function calculateNoise(noiseInc = .01, detail = detailSlider.value(), seed = 0)
{
  noiseSeed(seed);
  noiseDetail(detail);
  for(var i = 0; i < maxSize; i++)
    {
    for(var j = 0; j < maxSize; j++)
    {
      index = i * maxSize + j;
      noiseArr[index] = noise(noiseInc*i, noiseInc*j);
    }
  }
}
