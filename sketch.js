const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6;
var box8, box9, box10, box11, box12;
var box14, box15, box16, box17;
var box19, box20, box21;
var box23, box24;
var backgroundImg;
var ground , base1;

var score = 0;

var ball, slingShot

function preload() {
    getTime();
}  
function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(1200,600);
  //var pointB = createSprite(350,300,10,50)
   
  box1 = new Box(650,310,50,60)
  box2 = new Box(700,310,50,60)
  box3 = new Box(750,310,50,60)
  box4 = new Box(800,310,50,60)
  box5 = new Box(850,310,50,60)
  box6 = new Box(900,310,50,60)
  


  box8 = new Box(675,250,50,60)
  box9 = new Box(725,250,50,60)
  box10 = new Box(775,250,50,60)
  box11 = new Box(825,250,50,60)
  box12 = new Box(875,250,50,60)


  box14 = new Box(700,190,50,60)
  box15 = new Box(750,190,50,60)
  box16 = new Box(800,190,50,60)
  box17 = new Box(850,190,50,60)


  box19 = new Box(725,130,50,60)
  box20 = new Box(772,130,50,60)
  box21 = new Box(820,130,50,60)


  box23 = new Box(750,70,50,60)
  box24 = new Box(800,70,50,60)


  ground = new Ground(600,590,1200,20);
  base1 = new Ground(775,350,350,15);

  
  ball = new Paper(100,340,20);
  
  chain = new SlingShot(ball.body,{x:100,y:340})
  
  
}

function draw() {
  if(backgroundImg!=null){
    background(backgroundImg)
  } 
  Engine.update(engine);
  textFont("Georgia");
 
  textSize(20);

  text("Score : "+score,26,17)
  
  drawSprites();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();

  box14.score();
  box15.score();
  box16.score();
  box17.score();

  box19.score();
  box20.score();
  box21.score();

  box23.score();
  box24.score();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
 
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();

  box19.display();
  box20.display();
  box21.display();

  box23.display();
  box24.display();
  
  ground.display();
  base1.display();

  chain.display();
  ball.display();
  
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    chain.fly()
}

function keyPressed(){
    if(keyCode===32){
        chain.attach(ball.body);
    }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();

  var dateTime =responseJSON.datetime;
  console.log(dateTime);
  var hour = dateTime.slice(11,13)

   if (hour>=06 && hour<=18){
        bg = "meadow.jpg";
    }
    else{
        bg ="sunset.jpg";
    }
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
}