class Box{
    constructor(x,y,w,h){
        var options = {
            'restitution':.6,
            'friction':1.0,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.Visiblity = 255;
        this.istouched = false;
        this.image = loadImage("11-111774_block-of-grass-from-the-game-minecraft-minecraft.png")
        World.add(world, this.body);
    }
    display(){	
        var angle = this.body.angle;
        var pos = this.body.position;
        if(this.body.speed>6){
            this.istouched = true
          }
        
        if(this.istouched){
            if(this.Visiblity < 0){
              World.remove(world,this.body);
            }
            this.Visiblity -= 5;
            
        }
        push()
        var body = this.body.position;
        translate(body.x, body.y)
        rotate(angle*60);
        
        //fill(128,128,128);
        
        if(this.body.speed>6){
            this.istouched = true
          }
          
          if(this.istouched){
            if(this.Visiblity < 0){
              World.remove(world,this.body);
            }
            this.Visiblity -= 5;
            //push();
            tint(255,this.Visiblity);
            
            imageMode(CENTER);
            image(this.image,0, 0, this.w,this.h);
            //pop();
            
          }else{
            //push();
            //tint(255,this.Visiblity);
            
            imageMode(CENTER);
            image(this.image, 0, 0, this.w,this.h);
           // pop();
          }
          pop();
    }
}