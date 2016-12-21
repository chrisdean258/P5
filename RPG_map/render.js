function render(land = .5, desert = .75)
{
  loadPixels();
  for(var i = 0; i < width; i++)
  {
    for(var j = 0; j < height; j++)
    {
      var pixelIndex = (i + j * width) * 4;
      var noiseIndex = i*max + j;
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

function calculateNoise(detail = .01)
{
  for(var i = 0; i < max; i++)
    {
    for(var j = 0; j < max; j++)
    {
      index = i * max + j;
      noiseArr[index] = noise(detail*i, detail*j);
    }
  }
}
