var dropzone;
var img;
var loaded = false;
var firstTime = true;
var circles = [];

function setup() 
{
  dropzone = select('#dropzone');
  dropzone.dragOver(function(){highlight(dropzone,'#CCC')});
  dropzone.dragLeave(function(){highlight(dropzone,'#FFF')});
  dropzone.drop(gotFile,function(){highlight(dropzone,'#FFF')});
  createCanvas(0,0);
}

function highlight(domElem,color)
{
  domElem.style("background-color",color);
}

function gotFile(file)
{
  img = createImg(file.data);
  loaded = true;
  img.hide();
}

function draw()
{
  if(loaded)
  {
    if(firstTime)
    {
      firstTime = false;
    }
  }
}






