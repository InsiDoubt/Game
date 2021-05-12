class Coin {
  constructor() {
    this.x = int(random(width));
    this.y = 0 - height;
    this.r = 50;
  }
  display(){
    fill(0);
    image(coinImg, this.x, this.y, this.r,this.r);
  }
  move() {
    this.y = this.y +5;
    
    }
  
}