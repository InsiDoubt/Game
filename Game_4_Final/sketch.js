//texVars
let text1 = [
  "*whistles*",  "What a lovely day",
  "I should get my wife flowers",  " ",
  "Ah, man, I miss my kids",   " ",
  "Man, this job sucks",  "Hmmm",
];
let text2 = [
  "What are you doing here?",  "OH GOD YOU KILLED HIM!",
  "YOU JUST KILLED THAT GUY",  "I'm gonna be sick!",
  "Why would you do that!?",   "Oh god, he was my friend!",
  "He had a family!",  "STAY AWAY FROM ME!",
];
let text3 = [
  "Oh no oh no oh no",  "I'm gonna die",
  "Don't hurt me",  "Why are you doing  this!?",
  "Monster...",   "*Crying*",
];
let text4 = [ "Good day",  "What a nice fellow",]

let linestxt = 0;


let textTest = 0; // this one checks against framecount
let lineProg = true; // this isn't used

let texttimer; //
let textInt = 300; // this is the seconds / 60

let state = "title";
let cnv;
let points = 0;
let backgImg;
let stageInt = true;
let bunnyDeath = 0;



//TerrainVars
let xTPos = 0;
let yTPos = 0;
let terrain;
let terrainImg;

let stage = 1;

//enemyVars
let enemy1;
let bunnyDieImg;
let bunnyBaseImg;
let bunnyAimImg;
let bunnyFearImgL;
let bunnyFearImgR;
let rposE = 100;
let alert = false;

//PlayerVars
let playerImgL;
let playerImgR;
let playerImgRunL;
let playerImgRunR;
let slashImgL;
let slashImgR;
let player;
let xPos = 0;
let yPos = 0;
let rPos = 100;
let jumpInt = 0;

function preload() {
  backgImg = loadImage("Assets/Background.png");
  playerImgL = loadImage("Assets/MainCharacterL.gif");
  playerImgR = loadImage("Assets/MainCharacterR.gif");
  playerImgRunL = loadImage("Assets/MainCharacterRunL.gif");
  playerImgRunR = loadImage("Assets/MainCharacterRunR.gif");
  slashImgL = loadImage("Assets/SlashOnlyL.gif");
  slashImgR = loadImage("Assets/SlashOnlyR.gif");
  // coinImg = loadImage("Assets/coin-flip.gif");
  
  
  bunnyBaseImg = loadImage("Assets/BunnyBase.gif");
  bunnyFearImgL = loadImage("Assets/BunnyFearR.gif")
  bunnyFearImgR = loadImage("Assets/BunnyFearL.gif")
  bunnyAimImg = loadImage("Assets/BunnyAim.gif");
  bunnyDieImg = loadImage("Assets/BunnyDie.gif");

  terrainImg = loadImage("Assets/Terrain.png");
}

function setup() {
  
  cnv = createCanvas(600, 600);
  frameRate(60);
  cnv.parent('sketch-holder');
  
  player = new Player(xPos, yPos);
  enemy1 = new Enemy();
  terrain = new Terrain(xTPos, yTPos);
  linestxt = new Text();
  //coins [0] = new Coin();
  // coins.push(new Coin());
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

    case "level2":
      level2();
      break;
      
    case "level3":
      level3();
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
  switch (keyCode) {
    case LEFT_ARROW:
      player.direction = "left";
      break;

    case RIGHT_ARROW:
      player.direction = "right";
      console.log("right");

      break;

    case UP_ARROW:
      player.jumpInt = 1;
      console.log("up");

      break;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    if (player.direction == "left") {
      player.direction = "still";
    }
  } else if (keyCode == RIGHT_ARROW) {
    if (player.direction == "right") {
      player.direction = "still";
    }
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
  state = "title"
  bunnyDeath = 0;
  stageInt = true;
  textTest = 0;
  stage = 1;
  //enemy1.pos1();
 
}

function victory() {
  //Killed 3
  if (bunnyDeath == 3) {
  background(255,0,100);
  textSize(80);
  textAlign(CENTER);
  text("MURDERER" , 300, 200);
  textSize(30);
  text("Did you need to kill them all?", 300, 400)
  text("Did you even know you could choose not to?", 300,450);
  } else  if (bunnyDeath == 1 || bunnyDeath == 2) {
  background(200,0,100);
  textSize(80);
  textAlign(CENTER);
  text("You finished..." , 300, 200);
  textSize(30);
  text("But you still have blood on your hands.", 300, 350)
   text("Maybe you intended otherwise,", 300, 400);
    text(" but you still slipped up.", 300,450);
  } else  if (bunnyDeath == 0) {
  background(200);
  textSize(80);
  textAlign(CENTER);
  text("You Won!" , 300, 200);
  textSize(30);
  text("The little bunnies and their little", 300, 400);
    text("families thank you.", 300 , 450);
  }
  
  textSize(30);
  text("Click to return to title.", 300, 500);
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
  text("Click to start.", width / 2, height / 2 + 50);
  text("Arrow keys control the player. You can jump indefinitely.", width / 2, height / 2 + 100);
}

function level1() {
  image(backgImg, 0, 0, 600, 600);

  // stage
  if (stageInt == true) {
    texttimer = frameCount;
    enemy1.pos1();
    enemy1.resurrect();
    player.pos1();
    terrain.pos1();
    stageInt = false;
  }
  
  if (frameCount > texttimer + textInt) {
    textTest++;
    texttimer = frameCount;
    console.log(textTest);
  } else if (textTest >= 8) {
    
  }

  enemy1.display();
  enemy1.gravity();
  enemy1.detect();
  enemy1.collision();

  player.display();
  player.move();
  player.gravity();
  player.update();
  player.collisionG();
  player.collisionE();
  terrain.display();
  linestxt.display1();
  if (enemy1.life == 'alive') {
  text(text1[textTest], linestxt.textX, linestxt.textY);
  }
  if (stage == 2) {
    if (enemy1.life !== "alive") {
      bunnyDeath++;
    }
    state = "level2";
    stageInt = true;
    console.log("this is true");
  }
}

function level2() {
  image(backgImg, 0, 0, 600, 600);

  if (stageInt == true) {
    texttimer = frameCount;
    player.pos2();
    terrain.pos2();
    enemy1.pos2();
    enemy1.resurrect();
    if (bunnyDeath == 1) {
      textTest = 1;
      textInt = 180;
      console.log(textInt);
    } else if (bunnyDeath == 0) {
      textTest = 0;
    }
    stageInt = false;
  }
  
  if (frameCount > texttimer + textInt && textTest >= 1) {
    textTest++;
    texttimer = frameCount;
    console.log(textTest);
  } else {}

  enemy1.display();
  enemy1.gravity();
  enemy1.detect();
  enemy1.collision();

  player.display();
  player.move();
  player.gravity();
  player.update();
  player.collisionG();
  player.collisionE();

  terrain.display();
  linestxt.display2();
  if (enemy1.life == 'alive') {
  text(text2[textTest], linestxt.textX, linestxt.textY);
  }
  
  if (stage == 3) {
    if (enemy1.life !== "alive") {
      bunnyDeath++;
    }
    state = "level3";
    stageInt = true;
  }
}

function level3() {
  image(backgImg, 0, 0, 600, 600);

  if (stageInt == true) {
    texttimer = frameCount;
    player.pos3();
    terrain.pos3();
    enemy1.pos3();
    enemy1.resurrect();
    if (bunnyDeath >= 1) {
      textTest = 1;
      textInt = 180;
      console.log(textInt);
    } else if (bunnyDeath == 0) {
      textTest = 0;
    }
    stageInt = false;
  }
  
  if (frameCount > texttimer + textInt && textTest >= 1) {
    textTest++;
    texttimer = frameCount;
    console.log(textTest);
  } else {}

  if (bunnyDeath >= 2) {
    enemy1.displayfear();
  } else {
  enemy1.display();
  }
  enemy1.gravity();
  enemy1.detect();
  enemy1.collision();

  player.display();
  player.move();
  player.gravity();
  player.update();
  player.collisionG();
  player.collisionE();

  terrain.display();
  linestxt.display3();
  
  if (enemy1.life == 'alive') {
    if (bunnyDeath == 0) {
  text(text4[textTest], linestxt.textX, linestxt.textY);
    } else  if (bunnyDeath > 0) {
      text(text3[textTest], linestxt.textX, linestxt.textY);
    }
  }
  
  if (stage == 4) {
    console.log(stage);
    if (enemy1.life !== "alive") {
      bunnyDeath++;
    }
    state = "victory";
    stageInt = true;
  }
}
