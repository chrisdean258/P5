function spring(x2,y2,x1,y1, k , len)
{
  this.x1 = x1;
  this.x = x2;
  this.y1 = y1;
  this.y = y2;
  this.velocity = createVector(0,0);

  this.len = len;
  this.k = k;

  this.attached = undefined;
  this.mass = 0;

  this.show = function()
  {
    push();
    strokeWeight(1);
    line(this.x,this.y, this.x1,this.y1);
    strokeWeight(2);
    point(this.x1,this.y1);
    point(this.x,this.y);
    pop();
  }

  this.update1 = function()
  {
    var x = this.x1-this.x;
    var y = this.y1-this.y;

    var def = len / sqrt(x*x+y*y);
    //console.log(def);

    var xForce = x*(1-def) * k;
    var yForce = y*(1-def) * k;

    this.attached.velocity.x -= xForce/this.attached.mass;
    this.attached.velocity.y -= yForce/this.attached.mass;
  }
  this.update2 = function()
  {
    this.x1 = this.attached.x;
    this.y1 = this.attached.y;
  }

}