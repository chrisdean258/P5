var dropzone;

function setup() 
{
  dropzone = select('#dropzone');
  dropzone.dragOver(function(){highlight(dropzone,'#CCC')});
  dropzone.dragLeave(function(){highlight(dropzone,'#FFF')});
  dropzone.drop(loadImage,function(){highlight(dropzone,'#FFF')});
}

function highlight(domElem,color)
{
  domElem.style("background-color",color);
}

function loadImage(image)
{
  console.log(image);
}




