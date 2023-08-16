class Ground {
  constructor() {
    this.body = Bodies.rectangle(width / 2, height - 5, width, 10, { isStatic: true });
    World.add(world, this.body);
  }

  display() {
    fill(128);
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, width, 10);
  }
}