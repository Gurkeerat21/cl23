const Engine = Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
  var engine,world,body;
  var box1, box2, box3; 
  var ground1
  function setup(){ 
      createCanvas(400,400);
 engine = Engine.create(); 
 world = engine.world;
box1 = new box(200,350,50,50)
box2 =  new box(300, 350,50,50)
box3 = new box(160,300,50,50)
ground1 = new ground(200, 380, 400, 10)

 } 

 function draw(){
      background("orange");
      Engine.update(engine)
 box1.display()
 box2.display()
 box3.display()
 ground1.display()
}