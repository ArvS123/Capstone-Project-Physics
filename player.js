class Player {
  constructor() {
    this.body = Bodies.rectangle(width / 2, height - 25, 50, 10);
    World.add(world, this.body);
  }

  update() {
    Body.setPosition(this.body, { x: mouseX, y: height - 25 });
  }

  display() {
    fill(0);
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 50, 10);
  }

  reset() {
    Body.setPosition(this.body, { x: width / 2, y: height - 25 });
    Body.setVelocity(this.body, { x: 0, y: 0 });
  }
}


    
  