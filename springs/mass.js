function mass(x,y,mass)
{
  this.x = x;
  this.y = y;
  this.mass = mass;
  this.velocity = createVector(0,0);

  this.show = function()
  {
    push();
    strokeWeight(20);
    point(this.x,this.y);
    pop();
  }

  this.update = function()
  {
    this.velocity.x *= decay;
    this.velocity.y *= decay;
    
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}