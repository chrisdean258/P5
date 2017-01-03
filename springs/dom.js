//This file handles associating all dom elements and functions

function pauseButtonPressed()
{
  if(this.value() != "playing")
  {
    this.value("playing");
    this.html("Pause");
  }
  else
  {
    this.value("paused");
    this.html("Play");
  }

}