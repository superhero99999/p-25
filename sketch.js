
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(width/2,660,width,20)
ball=new Ball(50,600,50)
leftside=new Bin(523,605,20,90)
rightside=new Bin(673,605,20,90)
bottemside=new Bin(600,638,150,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 
 ball.display()
 leftside.display()
rightside.display()
bottemside.display()
image(bottemside.image,600,570,258,190)
ground.display()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:+85,y:-85})
	}
	function keyPressed(){
		if(keyCode===DOWN_ARROW){
			Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85})
		}
}


