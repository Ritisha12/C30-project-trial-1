const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//arrays start
var particles=[]
var plinkos=[]
var divisions=[]
 

var engine,world
var ground
var divisionHeight=300




function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(240,740,480,20)
  //divisions=new Divisions(40,580,10,300)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  for(var j=0;j<particles.length;j++){
  particles[j].display()
  }
  for(var k=0;j<divisions.length;j++){
    divisions[k].display()
  }
  
  ground.display() 
  //divisions.display()
  drawSprites();
}