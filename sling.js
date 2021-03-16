class Sling {
    constructor(a,b,long,stiff){
        var option = {
        'bodyA': a,
        'pointB': b,
        'stiffness':stiff,
        'length':long
        }
        this.pointB = b;
        this.joint  = Constraint.create(option);
        World.add(world,this.joint)
    }
    display(){
        
        if(this.joint.bodyA){
            var posA = this.joint.bodyA.position;
        push();
        stroke(48,22,8);
        strokeWeight(20)
        line(posA.x,posA.y,this.pointB.x,this.pointB.y);
        pop();
        }
    }
    break(){
        this.joint.bodyA = null;
        //this.joint.bodyB = null;
    }
    joining(a){
        this.joint.bodyA = a;
    }
}