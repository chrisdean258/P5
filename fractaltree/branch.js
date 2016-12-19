function branch(x1,y1,x2,y2)
{
  this.x1 = x1;
  this.x2 = x2;

  this.y1 = y1;
  this.y2 = y2;

  this.length = sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
  var dir = 0;

  this.show = function()
  {
    push();
    stroke(0);
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
  }
}
