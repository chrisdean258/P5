function person(size = 10, x = 0, y = 0, xVelocity = 0, yVelocity = 0)
{
  this.x = x;
  this.y = y;

  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;


  this.counter = random(100);
  this.size = size;

  this.show = function(color = 0)
  {
    push();
    fill(color);
    noStroke();
    rect(this.x,this.y,this.size,this.size);
    pop();
  }

  this.update = function(mult = 1)
  {
    this.x += this.xVelocity * mult;
    this.y += this.yVelocity * mult;
    if(this.x < 0)
    {
      this.x = 0;
    }
    else if (this.x > width - this.size)
    {
        this.x = width - this.size;
    }
    if(this.y < 0)
    {
      this.y = 0;
    }
    else if (this.y > height - this.size)
    {
        this.y = height - this.size;
    }
  }
  this.check = function()
  {
    if (this.x > width - 20 && this.y > height -20)
    {
      this.x = 0; this.y = 0;
      gaurds.push(new person(10,random(width),random(height)));
      mult *= 1.1;
      level++;
    }
  }
  this.check2 = function()
  {
    if (this.x > width - 40 && this.y > height - 40)
    {
      this.x = width; this.y = 0;
    }
  }
  this.noiseUpdate = function(mult = 1)
  {
    if (this.counter < 100)
    {
      this.counter++;
    }
    else
    {
      var angle = noise(this.x,this.y) * TWO_PI * 16;
      this.xVelocity = mult * cos(angle);
      this.yVelocity = mult * sin(angle);
      this.counter = 0;
    }
    this.update();
  }
}
