let state = "title";
let cnv;
let points = 0;
let player;
let coins = [];
let playerImg;
let coinImg;

function preload() {
  playerImg = loadImage('Assets/playerImg.gif');
  coinImg = loadImage('Assets/coin-flip.gif');
}

function setup() {
  cnv = createCanvas(600, 600);
  player = new Player();
  //coins [0] = new Coin();
  coins.push(new Coin());
}

function draw() {
  background(100);

  switch (state) {
    case "title":
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case "level1":
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;

    case "victory":
      victory();
      cnv.mouseClicked(victoryMouseClicked);
      break;

    default:
      broken();
      break;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.direction = "jumping";
  }
  if (keyCode == LEFT_ARROW) {
    player.direction = "left";
  }
  if (keyCode == RIGHT_ARROW) {
    player.direction = "right";
  }
}

function mouseDown() {
  state = "level1";
}

function titleMouseClicked() {
  state = "level1";
}

function level1MouseClicked() {
  console.log("points = " + points);
}

function victoryMouseClicked() {
  points = 0;
  state = "level1";
}

function victory() {
  background(255, 30, 100);
  text("a winner is you, with " + (points - 1) + " points", 50, 50);
}
function broken() {
  textSize(60);
  text("this got fucked", width / 2, height / 2);
}

function title() {
  textSize(80);
  textAlign(CENTER);
  stroke(255);
  text("Enemy", width / 2, height / 2);
  textSize(20);
  text("Click Somewhere", width / 2 - 60, height / 2 + 50);
}

function level1() {
  //  background(50);
  text(" for points ya goof. You have " + points + " points", width/2, 100);
  circle(mouseX, mouseY, 50);
  if (random(1) <= 0.01) {
    coins.push(new Coin());
  }

  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  player.display();
  player.move();

 for (let i = coins.length -1; i >=0; i--) {if (
    dist(player.x, player.y, coins[i].x, coins[i].y) <=
    (player.r + coins[i].r) / 2
  ) {
    points++;
   //this circle is for testing where the hit
   circle(player.hbw,player.hbh, (player.hbr + coins[i].r) / 2);
   coins.splice(i,1);
  }}
  //collision check
  for (let i = coins.length -1; i >=0; i--) {if (
    coins[i].y >= height +coins[i].r ) {
   coins.splice(i,1);
  console.log('coingone');
  }}
}
