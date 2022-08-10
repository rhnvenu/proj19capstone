var playerImg,player
var mapImg, map
var meteorImg,meteor







function preload(){
playerImg=loadImage("rocket.png")
mapImg=loadImage("space.jpeg")
}

function setup() {
 createCanvas(600,600);
 map=createSprite(300,300);
 map.addImage("map",mapImg);
 map.velocityY=1;




 rocketsGroup = new Group();
 meteorGroup = new Group();


 rocket = createSprite(200,200,50,50);
 rocket.scale = 0.3;
 rocket.addImage("rocket", rocketImg);
}

function draw() {
    background(0);
    if (gameState === "play") {
        if (gameState === "play") {
        if(keyDown("left_arrow")){
          rocket.x = rocket.x - 3;
        }
        
        if(keyDown("right_arrow")){
          rocket.x = rocket.x + 3;
        }
        
        if(keyDown("space")){
          rocket.velocityY = -10;
        }
        
        rocket.velocityY = rocket.velocityY + 0.8
        
        if(map.y > 400){
          map.y = 300
        }




spawnMeteors();




    drawSprites;
}
}
}






function spawnMeteors() {
    if (frameCount % 240 === 0) {
      var rocket = createSprite(200,10);
      var meteor = createSprite(200,15);
      meteor.width = rocket.width;
      meteor.height = 2;
    meteor.x = rocket.x;
      
      meteor.addImage(meteorImg);
      rocket.addImage(rocketImg);
      
      rocket.velocityY = 1;
   meteor.velocityY = 1;
      
      ghost.depth = door.depth;
      ghost.depth +=1;
     
      //assign lifetime to the variable
      door.lifetime = 800;
      climber.lifetime = 800;
    meteor.lifetime = 800;
  
      

      rocketGroup.add(rocket);
    meteorGroup.add(invisibleBlock);
    }
  }