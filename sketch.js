const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particle
var plinkos = []
var dividers = []
var particles = []
var ground
var gameState = "PLAY"
var score
var count 
var side1, side2


function setup() {
  createCanvas(1500,1500);

  engine = Engine.create();
  world = engine.world;

  
  wall1 = new Divider(600,25,890,20)
  wall2 = new Divider(605,1085,880,20)
  wall3 = new Divider(1040,565,10,1060)
  wall4 = new Divider(160,565,10,1060)
  

  plinkos = []
  dividers = []
  score = 0
  count = 0
  
  
  for(var a = 240; a<= width-500; a = a+50){
    plinkos.push(new Plinko(a, 75, 10))
  }

  for(var b = 215; b<= width-500; b = b+50){
    plinkos.push(new Plinko(b, 175, 10))
  }

  for(var c = 240; c<= width-500; c = c+50){
    plinkos.push(new Plinko(c, 275, 10))
  }



  for(var d = 215; d<= width-500; d = d+50){
    plinkos.push(new Plinko(d, 375, 10))
  }

  for(var e = 170; e<= width-450; e = e+145){
    dividers.push(new Divider(e, 875 , 10, 400))
  }
  Engine.run(engine);
}

function draw() {
  background(0);  
  //console.log()
  
  textSize(24);
  stroke(255);
  strokeWeight(10);
  text("Score: " + score, 1200, 150)
  text("Count: " + count, 1200, 180)

  if(count === 5){
    textSize(100);
    stroke(0);
    fill("red");
    text("GameOver", 350, 500)
  }
  

  textSize(24)
  text("300", 220, 725)
  text("500", 365, 725)
  text("100", 510, 725)
  text("100", 660, 725)
  text("500", 800, 725)
  text("300", 940, 725)

  strokeWeight(5);
  stroke("white")
  line(170,600,1030,600)

  strokeWeight(1);


   wall1.display()
   wall2.display()
   wall3.display()
   wall4.display()


      for (var x = 0; x < plinkos.length; x++) {
     
        plinkos[x].display();
        
      }

      

      for (var y = 0; y < dividers.length; y++) {
     
        dividers[y].display();
        
      }

      for(var z = 0; z < particles.length; z++ ){
        particles[z].display();
      }
      
      if(particle != null){
        particle.display()
        if(particle.body.position.y > 600){
          
          if(particle.body.position.x > 170 && particle.body.position.x < 315 ){
            score = score + 300;
            particle = null;
            //console.log("500")
          }
          else if(particle.body.position.x > 315 && particle.body.position.x < 460 ){
            score = score + 500;
            particle = null;
            //console.log("300")
          }
          else if(particle.body.position.x > 460 && particle.body.position.x < 605 ){
            score = score + 100;
            particle = null;
            //console.log("100")
          }
          else if(particle.body.position.x > 605 && particle.body.position.x < 750 ){
            score = score + 100;
            particle = null;
            //console.log("100")
          }
          else if(particle.body.position.x > 750 && particle.body.position.x < 895 ){
            score = score + 500;
            particle = null;
            //console.log("300")
          }
          else if(particle.body.position.x > 895 && particle.body.position.x < 1040 ){
            score = score + 300;
            particle = null;
            //console.log("500")
          }
        
        }
      }
      
      stroke(0)

   
    
    if(count === 5 ){
      gameState = "END" 
      //text("gameover",1200,550)
    }

    drawSprite();
}

function mousePressed(){

  if(gameState !== "END" && mouseX > 230 && mouseX < 990){
    count = count + 1
    particle = new Particle(mouseX, 50, 10)
    particles.push(particle)
  }
}


  

