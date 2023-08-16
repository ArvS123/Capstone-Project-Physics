const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var player;
var coins = [];
var ground;
var isGameOver = false;
var score = 0;
var coinDropInterval = 1500; 
var lastCoinDropTime = 0;
var coinSpeed = 1; 

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  
  player = new Player();
  ground = new Ground();
}

function draw() {
  background(220);
  Engine.update(engine);

  if (!isGameOver) {
    if (millis() - lastCoinDropTime > coinDropInterval) {
      coins.push(new Coin());
      lastCoinDropTime = millis();
      coinSpeed *= 1.01; 
    }
    
    for (var i = coins.length - 1; i >= 0; i--) {
      var coin = coins[i];
      coin.move();
      coin.display();

      if (coin.hits(player)) {
        coins.splice(i, 1);
        score++;
      } else if (coin.hitsGround(ground)) {
        gameOver();
      } else if (coin.isOffScreen()) {
        coins.splice(i, 1);
      }
    }

    player.update();
    player.display();
    ground.display();
    fill(0);
    textSize(20);
    text("Score: " + score, 10, 30);
  } else {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
    drawRestartButton();
  }
}

function mouseClicked() {
  if (isGameOver && mouseY > height / 2 + 40 && mouseY < height / 2 + 40 + 20) {
    restartGame();
  }
}

function gameOver() {
  isGameOver = true;
  noLoop();
}

function restartGame() {
  isGameOver = false;
  loop();
  coins.length = 0;
  score = 0;
  coinSpeed = 1;
  lastCoinDropTime = millis();
  player.reset();
}

function drawRestartButton() {
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2 + 40, 100, 30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Restart", width / 2, height / 2 + 40);
}








