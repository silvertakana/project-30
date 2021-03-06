class hexa {
    constructor(x, y, radius) {
      var options = {
          'restitution':.5,
          'friction':1,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.img = loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle*60);
      imageMode(CENTER);
      fill(0);
      image(this.img,0, 0, this.radius*2, this.radius*2);
      pop();
    }
  };
  