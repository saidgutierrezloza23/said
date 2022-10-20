const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let.engine;
let.world;
var botton;
var angle=60
var fan1,fan2,fan3,fan4;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  bottom=createImg('up.png');
  bottom.position(50,30);
  bottom.size(40,40);
  bottom.mouseClicked(vForce);

  fan1=new Ground(50,350,50,30);


  ground = Bodies.rectangle(100,400,400,20,ground_options)
  World.add(world,ground);
  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);

  fan1.show();
 
console.log(ground.position.y);

  
  
}
function vForce(){
Matter. Body. applyForce (ball,{x:0,y:0},{x:0,y:-0.05});

}
