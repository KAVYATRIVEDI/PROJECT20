var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

weight=random(400,1500);
speed=random(400,1500);

wall= createSprite(1500, 200, 60, height/2);

car=createSprite(50,200,50,50);
car.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();
}