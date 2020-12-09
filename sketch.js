var Aaron, backgroundImage, background1;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5;
var arrow;
var AaronImg, form;
var gameState = 0;

function preload(){
  backgroundImage = loadImage("Kingdom.jpg");
  enemy1 = loadImage("enemy1.png");
  enemy2 = loadImage("enemy2.png");
  enemy3 = loadImage("enemy3.png");
  enemy4 = loadImage("enemy4.png");
  enemy5 = loadImage("enemy5.png");
  AaronImg = loadImage("Aaron.png");
}

function setup() {
 //create the canvas
 createCanvas(displayWidth-60,displayHeight-60);
  
 //creating background
 background1 = createSprite(0, 0, 1200, 400);
 background1.addImage(backgroundImage);
 background1.scale = 2.7;
 background1.x = background1.width/2;
 
 // creating bow to shoot arrow
 Aaron = createSprite(displayWidth/2, (displayHeight/2)-50, 50, 50);
 Aaron.addImage(AaronImg); 
 Aaron.scale = 0.5;
  form = new Form();
}

function draw() {
  if(gameState === 0){
    background(255);
    form.display();
  }
  else if(gameState === 1){
    background1.velocityX = -1;
    if(background1.x < 0){
      background1.x = background1.width/2;
    }
    spawnEnemies();
    Aaron_action();
    console.log(Aaron.depth);
    console.log(background1.depth);
  }
  
}

function spawnEnemies(){
  if(frameCount%120 === 0){
    enemy = createSprite(displayWidth,displayHeight-40,50,50);
    enemy.velocityX = -4;
    enemy.y = Math.round(random(0, displayHeight));
    var rand = Math.round(random(2,3));
    switch(rand){
      case 1: enemy.addImage("enemy", enemy1);
      break;
      case 2: enemy.addImage("enemy", enemy2);
      break;
      case 3: enemy.addImage("enemy", enemy3);
      break;
      case 4: enemy.addImage("enemy", enemy4);
      break;
      case 5: enemy.addImage("enemy", enemy5);
      break;
      default: break;
    }
    enemy.scale = 0.2;
  }
}
function createArrow(){
  arrow = createSprite(Aaron.x,Aaron.y,60,10);
  arrow.velocityX = 4;
  arrow.lifetime = (displayWidth-60)/4;

}

function Aaron_action(){
  if(keyDown("SPACE")){
    createArrow();
  }
  else if(keyDown(LEFT_ARROW)){
    Aaron.velocityX = -3;
  } 
  else if(keyDown(RIGHT_ARROW)){
    Aaron.velocityX = 3;
  } 
  else if(keyDown(UP_ARROW)){
    Aaron.velocityY = -3;
  }
  else if(keyDown(DOWN_ARROW)){
    Aaron.velocityY = 3;
  }
  drawSprites();
}