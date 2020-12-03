
var wall;
var car;
var speed;
var weight;

function setup() {
 
 createCanvas(1000,400);
  
 car=createSprite(20, 200, 50, 50);
  
 wall=createSprite(990,200,60,height/2);
 wall.shapeColor=color(80,80,80);

 speed=random(55,90);
 weight=random(400,1500);

 car.velocityX=speed;

}

function draw() {
  
 background(255,255,255);  

 if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  car.x=wall.x-50;
  var deformation=0.5*speed*weight*speed/22500;
  if(deformation>180){
   car.shapeColor='red';
}
  if(deformation<180 && deformation>100 ){
   car.shapeColor='yellow';
}
  if(deformation<100){
   car.shapeColor='green';
 }
}

 drawSprites();

}
