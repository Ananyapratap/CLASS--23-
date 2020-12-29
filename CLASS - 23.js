const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground; 
 var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundoptions = {
    isStatic:true

  }
  var balloptions = {

    restitution:1.0


  }
  ground=Bodies.rectangle(200,390,200,20,groundoptions);
World.add(world,ground);
ball = Bodies.circle(200,100,20,balloptions);
World.add(world,ball);
}

function draw() {
  background("black");

 Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  circle(ball.position.x,ball.position.y,20);

}