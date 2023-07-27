const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall
var bg
var bin
var score = 0


function preload()
{
	bg = loadImage("assets/classroom.jpeg")
  bin = loadImage("assets/bin.png")
  paperBall = loadImage("assets/paperBall.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,3200,20)
leftWall = new Ground(800,620,20,100)
rightWall = new Ground(650,620,20,100)
Wall = new Ground(750,620,20,100)
   var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
   }
   ball = Bodies.circle(200,200,20,ball_options)
   World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg)
  ground.display()  
  //leftWall.display()
  //rightWall.display()
  ellipseMode(RADIUS)
  //ellipse(ball.position.x,ball.position.y,20,20)
  imageMode(CENTER);
  image(bin, 725, 590, 170, 170)
  textSize(50)
  fill("black")
  text(mouseX, 100, 100)
  text(mouseY, 100, 300)
  text("score:" + score, 1400, 60)
  //ball(paperBall)
  image(paperBall, ball.position.x, ball.position.y, 40, 40)

  var hasScored = false; 

  let ballInsideArea = false; 

  
  if (ball.position.x >= 700 && ball.position.x <= 2334 && ball.position.y >= 600 && ball.position.y <= 680) {
    if (!ballInsideArea) {
      
      score = score + 1;
      ballInsideArea = true;
    }
  } else {
    ballInsideArea = false;
  }
  
}


function keyPressed() {
  if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball,ball.position,{
		x:60,y:-60
	})
  }
  }



