function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"

  movingRect = createSprite(800, 200, 50, 50);
  movingRect.shapeColor = "green"

  rect1 = createSprite(100,100,10, 30);
  rect1.shapeColor = "green"

  rect2 = createSprite(200,100,10, 30);
  rect2.shapeColor = "green"

  rect3 = createSprite(300,100,10, 30);
  rect3.shapeColor = "green"

  rect4 = createSprite(400,100,10, 30);
  rect4.shapeColor = "green"


  //movingRect.velocityX = -3
  rect4.velocityY = 3
}

function draw() {
  background(255,255,255);  
  
   
   //isTouching();

   //bounceOff(movingRect, fixedRect);
   bounceOff(rect4, fixedRect);

   if(isTouching(movingRect, rect1)||isTouching(movingRect, rect2)||isTouching(movingRect, rect3)||isTouching(movingRect, rect4)){
     movingRect.shapeColor = "red"
     fixedRect.shapeColor = "red"
   }
   else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green" 
   }

   move(movingRect);

   


  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

  

  

  drawSprites();
  mouseCoordinates();
}






//movingRect.isTouching(fixedRect)
//movingRect.velocityX =- movingRect.velocityX