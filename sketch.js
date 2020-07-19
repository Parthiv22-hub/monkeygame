//Global Variables
var bananaimage;
var obstacleimage;
var obstaclegroup;
var backgr;
var score;
var backimg;
var Monkey
var monkeyImg
var bananagroup;
var banana1;
var ground;

function preload(){

  monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
backimg = loadImage("jungle.jpg");

bananaimg = loadImage("Banana.png")  
  
obstacleimage = loadImage("stone.png")  

ground = loadImage("ground.jpg")  
  
}  



function setup() {
  createCanvas(600,500);

backgr = createSprite(200,200,122,300);
 backgr.addImage(backimg); 
  backgr.scale=1.5;
backgr.velocityX = -5;  
  
  
 Monkey = createSprite(142,349,10,10);
 Monkey.addAnimation("monkey", monkeyImg);   
Monkey.scale=0.10;  
  

  bananagroup = new Group();
obstaclegroup = new Group();
    
}


function draw(){
 background(255); 


if(backgr.x < 0)
{
  backgr.x = backgr.width/2;
}

  if(bananagroup.isTouching(Monkey)){
      bananagroup.destroyEach();
    score = score + 2;
    }

if(Monkey.isTouching(obstaclegroup)){
Monkey.scale = 0.2;
}    


  
  
  switch(score){
        case 10: Monkey.scale=0.12;
                break;
        case 20: Monkey.scale=0.14;
                break;
        case 30: Monkey.scale=0.16;
                break;
        case 40: Monkey.scale=0.18;
                break;
        default: break;
    }
  
  if(keyDown("space")) {
    Monkey.velocityY = -10;
  }
 
    Monkey.velocityY = Monkey.velocityY + 0.8
  
ground = createSprite(290,373,400,10);
ground.visible = false;  
Monkey.collide(ground);   
  

  
 banana(); 
  obstacles();
  
drawSprites();
stroke("red");
textSize(20);
fill("red");
text("Score:" + score,297,39);
}


function banana(){
if(frameCount%80===0){ 
  
var banana1=createSprite(400,random(120,200),10,10);
banana1.addAnimation("Banana.png",bananaimg);
banana1.scale=0.05;
banana1.velocityX=-5;
bananagroup.add(banana1);



}
}


function obstacles(){
if(frameCount%200===0){  
 
var stone=createSprite(228,382,10,10); 
stone.addAnimation("stone.png",obstacleimage); 
 stone.scale=0.07;
 stone.velocityX=-5;
obstaclegroup.add(stone);  
stone.setlifetime=200;


}

}
