
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var boyImage;
var mango1;
var stone1;
var slingshot1;

function preload()
{
	boyImage=loadImage("Plucking_mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(0,600,1600,20);

	tree1 = new Tree(560,390,500,450);

	mango1= new Mangoes(600,300,10);
	mango2= new Mangoes(500,250,10);
    mango3= new Mangoes(450,350,10);
    mango4= new Mangoes(700,320,10);
    mango5= new Mangoes(600,210,10);

	stone1= new Stone(80,465,30);

	slingshot1=new Slingshot(stone1.body,{x:100,y:480});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
ground1.display();

tree1.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

slingshot1.display();

image(boyImage,150,530,200,250);

stone1.display();

detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:235,y:420})
slingshot1.attach(stone1.body)
}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=lmango.radius+lstone.radius){
	Matter.Body.setStatic(lmango.body,false);
	
}
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
 }
 
 function mouseReleased(){
	 slingshot1.fly();
 }