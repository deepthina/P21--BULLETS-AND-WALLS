var wall, thickness;
var weight,speed, bullet;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor="white";

  thickness=random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80);

  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX=speed;
}

function draw() {

  background("black");   

   if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor="green";
    }
    else if(damage>10 ){
      wall.shapeColor="red";
    }
     }
  drawSprites();
}

function hasCollided(Bullet,Wall){
 text("Bullet.x + Bullet.width"+ round(Bullet.x ),100,20);
 text("Wall.x ="+Wall.x,500,20);
  var bulletRightEdge = Bullet.x + Bullet.width;
  var wallLeftEdge = Wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else {
    return false;
  }

}