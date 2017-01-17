function circle(x, y, rad, col, i)
{
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.i = i;
  this.col = col;
  this.growing = true;
  
  this.update = function()
  {
    if(this.growing)
    {
      for(var i = 0; i < circles.length; i++)
      {
        if(i != this.i)
        {
          if((this.x - circles[i].x) * (this.x - circles[i].x) + (this.y - circles[i].y) * (this.y - circles[i].y) <= (this.rad+circles[i].rad) * (this.rad+circles[i].rad) )
          {
            this.growing = false;
          }
          
        }
      }
    }
    if(this.growing)
    {
      rad++;
    }
    
  }
  this.show = function()
  {
    stroke(this.col);
    fill(this.col);
    ellipse(this.x,this.y,this.rad,this.rad);
  }
}
