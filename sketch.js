const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;



var box1;




function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world  =  engine.world;
  box1 = new Box(200,100,50,50);
  box2 = new Box(100,50,50,100);
  ground = new Ground(200,height,400,20);
}


function draw(){
background("black");
  Engine.update(engine);
  console.log(box2,body,position.x);

  console.log(box2,body,position.y);


  console.log(box2,body,angle);
  box1.display();
 
  box2.display();

  
  
  ground.display();



 }
