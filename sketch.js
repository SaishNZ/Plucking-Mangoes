
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1080, 120, 30);
	mango2 = new mango(1200, 120, 30);
	mango3 = new mango(990, 60, 30);
	mango4 = new mango(1100, 40, 30);	
	mango5 = new mango(980, 150, 30);
	mango6 = new mango(900, 165, 30);
	mango7 = new mango(935, 240, 30);
	mango8 = new mango(1020, 235, 30);
	mango9 = new mango(1110, 200, 30);
	mango10 =new mango(1200, 210, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new stone(175, 300, 25);
	launcherObject = new Rope(stoneObj.body, {x: 240, y: 420});
	
	Engine.run(engine);

}

function draw() {

  background(230);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  stoneObj.display();  
  treeObj.display();
  groundObject.display();
  launcherObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectollision(stoneObj, mango1);
  detectollision(stoneObj, mango2);
  detectollision(stoneObj, mango3);
  detectollision(stoneObj, mango4);
  detectollision(stoneObj, mango5);
  detectollision(stoneObj, mango6);
  detectollision(stoneObj, mango7);
  detectollision(stoneObj, mango8);
  detectollision(stoneObj, mango9);
  detectollision(stoneObj, mango10);
}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y:mouseY})
}

function mouseReleased() {
    launcherObject.fly()
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(Lstone, Lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}
