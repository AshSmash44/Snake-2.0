var snake;
var apple;
var canvas;

function setup(){
  canvas = createCanvas(500,500);
  snake = createSprite(100, 200, 50, 10);
  apple = createSprite(300, 200, 10, 10);
  snake.shapeColor = "blue";
  apple.shapeColor = "red";
}

function draw() {

  background("lime");

console.log(snake.angle);

 if(keyWentDown("w")){
    snake.velocityY = -10;
    snake.angle = PI/2;
  }
     if(keyWentDown("s")){
    snake.velocityY = 10;
    
  }
     if(keyWentDown("a")){
    snake.velocityX = -10;
  }
     if(keyWentDown("d")){
    snake.velocityX = 10;
  }
  
  if(snake.isTouching(apple)){
    apple.x = Math.round(random(10,390));
    apple.y = Math.round(random(10,390));
    snake.width = snake.width + 10;
  }
  
  drawSprites();
}
 