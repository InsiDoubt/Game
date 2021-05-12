class Player {
  constructor(){
    this.r = 100;
    this.hbw = this.x+25;
    this.hbh = this.y+25;
    this.hbr = 50;
    this.x = width/ 2;
    this.y = height-this.r;
    this.direction = 'still';
    this.speed = 2;
    this.latSpeed = 5;
  }
  
  display(){
    // rect(this.x,this.y, this.r,this.r);
    circle(player.hbw,player.hbh, (player.hbr + 100) / 2);
    image(playerImg, this.x,this.y, this.r,this.r);
   
    
  }
  
  move(){
    switch (this.direction) {
      case 'still':
        break;
        
        case 'jumping':
        if (this.y <= this.r) {
          this.y = 0;
          this.direction = 'falling';
        }
        this.y = this.y - 50;
        this.direction = 'falling';
        console.log('UP');
        break;
        
        case 'falling':
        this.y = this.y + this.speed;
        if (this.y > height - this.r) {
          this.y = height - this.r;
          this.direction = 'still';
        }
        
        break;
        
        case 'right':
        if (this.x >= width - this.r) {
          this.x = width - this.r;
          this.direction = 'still';
        }
        this.x += this.latSpeed;
        this.direction = 'falling';
console.log('R');
        break;
        
        case 'left':
        if (this.x <= 0) {
          this.x = 0;
        }
        this.x -= this.latSpeed;
        this.direction = 'falling';
console.log('L');
        break;
        
        default:
        break;
  }
  
}
}