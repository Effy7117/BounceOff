var fr, mr;

function setup() {
  createCanvas(800,800);
  fr = createSprite(400, 100, 50, 50);
  fr.shapeColor = "green";
  fr.debug = true;
  mr = createSprite(400, 600,50,50);
  mr.shapeColor = "green";
  mr.debug = true;

  mr.velocityY = -5;
  fr.velocityY = +5;
}

function draw() {
  background(255);  

  if (mr.x - fr.x < mr.fr/2 + fr.width/2
      && fr.x - movingRect.x < fr.width/2 + mr.width/2) {
        mr.velocityX = mr.velocityX * (-1);
    fr.velocityX = fr.velocityX * (-1);
  }
  if (mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2){
      mr.velocityY = mr.velocityY * (-1);
    fr.velocityY = fr.velocityY * (-1);
  }
  drawSprites();
}