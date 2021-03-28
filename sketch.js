/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;*/

var engine, world;
var boy;
var gameState = 0;
var timeMachine; 
var boyImg, timeMachineImg, manImg;
var bgImg, bgImg1;
var obstacle, obstacleImg;
var obstacleGroup;
var bullet, bulletImg, gun, gunImg;
var bulletGroup;
var girl, girlImg;

function preload(){
/*boyImg = loadAnimation();
timeMachineImg = loadImage();
bgImg = loadImage();
bgImg1 = loadImage();
manImg = loadImage();
girlImg = loadImage();
obstacleImg = loadImage();
bulletImg = loadImage();
gunImg = loadImage();
 */

}
function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
   // engine = Engine.create();
   // world = engine.world;
    boy = createSprite(500,200,10,20);
    timeMachine = createSprite(400,500,20,10);
   // boy.addAnimation();
   // timeMachine.addImage();
   //obstacleGroup = new Group();
    //bulletGroup = new Group();
}

function draw(){
    background(0);
    //Engine.update(engine);
    
    if(gameState===0){
        if(keyDown(RIGHT_ARROW)){
            boy.x = boy.x+50;
        }

        if(keyDown(LEFT_ARROW)){
            boy.x =  boy.x-50;
        }

        text("Control the boy with help of arrow keys ", 700,100);
        text("and make it touch the timeMachine to enjoy the adventure of future",700,200);

      if(boy.x-timeMachine.x<boy.width/2+timeMachine.width/2 &&
            timeMachine.x - boy.x< boy.width/2 +timeMachine.width/2 &&
            boy.y-timeMachine.y< boy.height/2+timeMachine.height/2 &&
            timeMachine.y-boy.y<boy.height/2+timeMachine.height/2){
                gameState = 1;
            }

    }
    

    if(gameState===1){
        //boy.addAnimation();
        }
        spawnObstacles();
    drawSprites();
}

function spawnObstacles() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var obstacle = createSprite(600,120,40,10);
      obstacle.y = Math.round(random(80,120));
     // obstacle.addImage(obstacleImg);
      obstacle.scale = 0.5;
      obstacle.velocityX = -3;
      
       //assign lifetime to the variable
       obstacle.lifetime = 200;
      
      //adjust the depth
      obstacle.depth = boy.depth;
      boy.depth = boy.depth + 1;
      
      //add each cloud to the group
      //obstacleGroup.add(obstacle);
    }
    
  }

  function bullets(){
      bullet = createSprite(400,600,10,10);

      
  }
