class Coin {
  constructor() {
    this.body = Bodies.circle(random(width), 0, 15);
    World.add(world, this.body);
    this.speed = coinSpeed;
  }

  move() {
    Body.translate(this.body, { x: 0, y: this.speed });
  }

  display() {
    fill(255, 255, 0);
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, 30, 30);
  }

  hits(player) {
    return Matter.SAT.collides(this.body, player.body).collided;
  }

  hitsGround(ground) {
    return Matter.SAT.collides(this.body, ground.body).collided;
  }

  isOffScreen() {
    return this.body.position.y > height;
  }
}
