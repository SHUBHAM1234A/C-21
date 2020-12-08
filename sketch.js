var fixedRect,movingRect,a,b,c,d,e;

function setup() {
  var canvas = createCanvas(1600,800);

  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColor = "green"; 

  a = createSprite(200,200,40,40);
  a.shapeColor = "orange";
  b = createSprite(100,200,40,40);
  b.shapeColor = "yellow";
  c = createSprite(300,200,40,40);
  c.shapeColor = "blue";
  d = createSprite(500,200,40,40);
  d.shapeColor = "red";
  d.velocityY = 3;
  e = createSprite(500,600,40,40);
  e.shapeColor = "pink";
  e.velocityY = -3;

}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,a)){
    a.shapeColor = "red";
    movingRect.shapeColor = "green"; 
  }else{
    a.shapeColor = "yellow";
    movingRect.shapeColor = "blue"; 
  }

  bounceOff(d,e);
  
  drawSprites();
}

