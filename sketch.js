var block = [],hexagon,grounds = [],sling;
function setup(){
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    grounds[1] = new Ground(width/2,height,width,100);
    //block[1] = new Box(width/2,height/2,50,50);
    hexagon = new hexa(100,100,50);
    sling = new Sling(hexagon.body,{x:250,y:height-300},.1,.02);
    piramid(width/2,height-100,0)
    piramid(width/2+400,height-300,10)
    grounds[2] = new Ground(width/2+400,height-250,500,10);
    //piramid(width/2-200,height-100,10)
    Engine.run(engine);
}
function draw() {
    background(220);
    //Engine.update(engine);
    grounds[1].display();
    grounds[2].display();
    renderPiramid(0);
    renderPiramid(10);
    

   // block[1].display();
    if(mouseIsPressed){
        //Matter.Body.setVelocity(bird.body,{x:0,y:0});
       
        sling.joining(hexagon.body);
        //Matter.Body.setVelocity(hexagon.body,{x:0,y:0});
        Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
       
        //bird.body.position.x = mouseX;
    //bird.body.position.y = mouseY;
    }
    sling.display();
    hexagon.display();
}
function mouseReleased(){
    sling.break();
}
function piramid(x,y,starter){
   // var floor = level;
    
    /*for(var i = starter;i<level + starter;i++){
        
        for (var e = i+floor; e<floor; index++) {
            block[i] = new Box(x-(2*50),y+floor,50,50);
            
        }
      
    }*/
    for (var index = starter; index <4+starter; index++) {
        block[index] = new Box(x-(2*50)+(index-starter)*50,y,50,50);
    }
    for (index = index; index <7+starter; index++) {
        block[index] = new Box(x-(1.5*50)+(index-4-starter)*50,y-50,50,50);
    }
    for (index = index; index <9+starter; index++) {
        block[index] = new Box(x-(1*50)+(index-7-starter)*50,y-100,50,50);
    }
    for (index = index; index <10+starter; index++) {
        block[index] = new Box(x-(.5*50)+(index-9-starter)*50,y-150,50,50);
    }
}
function renderPiramid(starter) {
    for (let index = starter; index <10+starter; index++) {
        block[index].display();
    }
}