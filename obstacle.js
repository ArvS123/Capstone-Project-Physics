class Obstacle {
    constructor(x, y) {
      this.body = Bodies.rectangle(x, y, 40, 20);
      this.body.isStatic = true;
      World.add(world, this.body);
    }
  
    display() {
      fill(255, 0, 0);
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, 40, 20);
    }
  }
  