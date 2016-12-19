var tree = [];
function setup() {
  createCanvas(600,600);

  tree[0] = new branch(width/2, height, width/2, height/1.5);

}

function draw() {
  background(250);
  for(var i = 0; i < tree.length; i++)
  {
    tree[i].show();
  }
}
