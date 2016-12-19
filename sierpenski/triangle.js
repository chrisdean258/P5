function tri(x1,y1,x2,y2,x3,y3)
{
  this.x1 = x1;
  this.x2 = x2;
  this.x3 = x3;
  
  this.y1 = y1;
  this.y2 = y2;
  this.y3 = y3;
  
  this.nextLayerDrawn = false;
  
  this.show = function()
  {
    line(x1,y1,x2,y2);
    line(x1,y1,x3,y3);
    line(x2,y2,x3,y3);
  }
  
  this.next = function()
  {
    var xMid1, xMid2, xMid3, yMid1, yMid2, yMid3;
    var rtn = [];
    
    xMid1 = ( this.x1 + this.x2 ) / 2;
    xMid2 = ( this.x1 + this.x3 ) / 2;
    xMid3 = ( this.x2 + this.x3 ) / 2;
    
    yMid1 = ( this.y1 + this.y2 ) / 2;
    yMid2 = ( this.y1 + this.y3 ) / 2;
    yMid3 = ( this.y2 + this.y3 ) / 2;
    
    rtn[0] = new tri(xMid1, yMid1, xMid2, yMid2, x1,y1);
    rtn[1] = new tri(xMid1, yMid1, xMid3, yMid3, x2,y2);
    rtn[2] = new tri(xMid2, yMid2, xMid3, yMid3, x3,y3);
    
    return rtn;
  }
  
}