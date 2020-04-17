var ball,ballimg,paddleimg,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(40,200,10,10);
  ball.addImage("ball",ballimg);
  
  paddle = createSprite(360,200,10,10);
  paddle.addImage("paddle",paddleimg);
  
  ball.velocityX = 9;
 
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  //createEdgeSprites();
  //paddle.collide();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  
  ball.bounceOff(paddle,randomVelocity)
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyWentDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -16;
  }
  
   if(keyWentUp(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 0;
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
    /* what should happen when you press the DOWN Arrow Key */
    paddle.velocityY = 16;
    
  }
   if(keyWentUp(DOWN_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 0;
  }
  
  edges = createEdgeSprites();
 // console.log(edges);
  paddle.collide(edges[2]);
   paddle.collide(edges[3]);
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(5,-10);
  
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

