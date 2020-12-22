const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,700,1200,20);

	//create dustbins side
	dustbin=new Dustbin(1000,680); 

	// create paper
	paper= new 	Paper (200,680,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //ground rect
  ground.display();
  dustbin.display();
 paper.display ()
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-18});
	}
}





