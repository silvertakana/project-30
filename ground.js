class Ground{
    constructor(x,y,w,h){
        var properties = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,properties);
        World.add(world, this.body);
    }
    display(){	
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER)
        fill(128,128,128)
        rect(0,0,this.w, this.h);
        pop();
    }

}