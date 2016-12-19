// Daniel Shiffman with modifications by Christopher Dean
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/6z7GQewK-Ks


function setup() {
  var dimW =floor(min(windowWidth, windowHeight *4/3));
  var dimH =floor(min(windowHeight, windowWidth *3/4));
  
  createCanvas(dimW,dimH);
  
  pixelDensity(1);
  
  asyncDraw();
}

function windowResized()
{
  var dimW =floor(min(windowWidth, windowHeight *4/3));
  var dimH =floor(min(windowHeight, windowWidth *3/4));
  
  resizeCanvas(dimW,dimH);
  asyncDraw();
}

function draw() {noLoop();}

function asyncDraw()
{
  var maxiterations = 1000;

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      
      var a = map(x, 0, width, -2.5, 1.5);
      var b = map(y, 0, height,  -1.5, 1.5);
      
      var threshold = 30;
      var aOrig = a;
      var bOrig = b;
      
      for (var n = 0; n < maxiterations; n++) {
        var newRe = a * a - b * b;
        var newIm = 2 * a * b;
        a = newRe + aOrig;
        b = newIm + bOrig;
        if (a * a + b * b > 40) {
          break;
        }
      }
      
      var bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      
      if (n == maxiterations) {
        bright = threshold;
      }
      if(bright < threshold)
      {
        bright = 0;
      }
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  
  updatePixels();
  stroke(255);  
}