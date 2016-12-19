function star()
{
  this.x = .5*(random(0, width) + random(0, width)) ;
  this.y = .5*(random(0, height) + random(0,height));
  
  var d = dist(width/2, height/2, this.x, this.y);
  this.rad = .5*sqrt(d);
  
  this.show = function()
  {
    push();
    noStroke();
    fill(map(4*this.rad*this.rad, 0, dist(0,0, width/2,height/2), 0,255));
    ellipse(this.x, this.y, this.rad, this.rad);
  }
  
  this.update = function(mult)
  {
    this.x += mult * .1*(this.x-width/2);
    this.y += mult * .1*(this.y-height/2);
    
    if (this.x > width || this.x < 0)
    {
      this.x = .5*( random(0, width) + random(0, width)) ;
    }
    if (this.y > height || this.y < 0)
    {
      this.y = .5*( random(0, height) + random(0, height)) ;
    }
    
    var d = dist(width/2, height/2, this.x, this.y);
    this.rad = .5*sqrt(d);
  }
  
  this.spin = function(angle)
  {
    this.x = this.x * cos(angle) - this.y*sin(angle);
    this.y = this.y * cos(angle) + this.x*sin(angle);
  }
  
}