var wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  thickness = random(25,90)

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);  

  function hasCollided(lbullet , lwall)
  {
    bulletRightEdge= bullet.x + bullet.width;
    wallLeftEdge= wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }



  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed *speed/(thickness *thickness *thickness);
  
  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if (damage< 10)
  {wall.shapeColor=color(0,255,0)}
  
  
  }



  drawSprites();
}