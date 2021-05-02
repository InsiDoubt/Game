let state = 'title';
let cnv;
let points = 0;


function setup() {
  cnv = createCanvas(600, 600);

}

function draw() {
  background(100);

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'level1':
      level1();
      cnv.mouseClicked(level1MouseClicked)
      break;

    case 'victory':
      victory();
      cnv.mouseClicked(victoryMouseClicked)
      break;
      
    default:
      broken();
      break;

  }


}


function mouseDown() {
  state = 'level1';
}

function level1() {
//  background(50);
  text('click for points ya goof. You have ' + points + ' points', 50, 50);
  circle(mouseX, mouseY, 50)
}

function titleMouseClicked() {
  state = 'level1'
}

function level1MouseClicked() {
    console.log('points = ' + points);
  if (points >= 10) {
    state = 'victory';
  }
   points++;
}

function victoryMouseClicked() {
  points = 0;
  state = 'level1';
}


function victory() {
  background(255, 30, 100);
  text('a winner is you, with ' + (points-1) + ' points', 50, 50)
}
function broken() {
  textSize(60)
  text('this got fucked', width / 2, height / 2)
}

function title() {
  textSize(80);
  stroke(255);
  text('Enemy', width / 2 - 80, height / 2);
  textSize(20);
  text('Click Somewhere', width / 2 - 60, height / 2 + 50)
}