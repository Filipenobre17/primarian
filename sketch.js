var LF 
function setup() {
LF = createSprite(500,500,109,109)
  createCanvas(1000,1000);
}

function draw() 
{
  background("red");

  drawSprites()
  if (keyIsDown(UP_ARROW)) {
    LF.y = LF.y-5
  }
  if (keyIsDown(DOWN_ARROW)) {
    LF.y = LF.y+5
  }
  if (keyIsDown(LEFT_ARROW)) {
    LF.x = LF.x-5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    LF.x = LF.x+5
  }
}




