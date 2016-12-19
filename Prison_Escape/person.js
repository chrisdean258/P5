function person(size = 10, x = 0, y = 0, xVelocity = 0, yVelocity = 0)
{
  this.x = x;
  this.y = y;

  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;

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
        this.x = width - this.size
    }
    if(this.y < 0)
    {
      this.y = 0;
    }
    else if (this.y > height - this.size)
    {
        this.y = height - this.size
    }
  }

}
