var path;
var pathImg;
var runner;
var runnerImg;
var invisibleGround1;
var invisibleGround2;

function preload(){

  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;

  runner = createSprite(150,200);
  runner.scale = 0.05;
  runner.addAnimation("runner", runnerImg);

  invisibleGround1 = createSprite(390,325,30,1000);
  invisibleGround1.visible=false;

  invisibleGround2 = createSprite(15,75,30,1000)
  invisibleGround2.visible=false;

  runner.collide(invisibleGround1);
  runner.collide(invisibleGround2);

  
}

function draw() {
  background(0);

  runner.collide(invisibleGround1);
  runner.collide(invisibleGround2);

  runner.x = World.mouseX
  
  path.velocityY = 15;
  
  if(path.y > 400){
    path.y = height/4;
  }

  drawSprites();
}

