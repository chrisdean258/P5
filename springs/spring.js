function spring(x1,y1,x2,y2, k , len)
{
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;
  this.velocity = createVector(0,0);

  this.len = len;
  this.k = k;

  this.attached = undefined;
  this.mass = 0;

  this.show = function()
  {
    push();
    strokeWeight(1);
    line(this.x1,this.y1, this.x2,this.y2);
    pop();
  }

}