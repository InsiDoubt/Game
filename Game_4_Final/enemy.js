class Enemy {
  constructor() {
    this.xE = 0;
    this.yE = 0;
    this.rE = 100;
    this.latSpeed = 5;
    this.life = "alive";
  }

  pos1() {
    this.xE = 300;
    this.yE = 500;
  }

  pos2() {
    this.xE = 355;
    this.yE = 500;
  }
  pos3() {
    this.xE = 450;
    this.yE = 500;
  }

  resurrect() {
    setTimeout(() => {this.life = "alive";}, 50);
  }

  gravity() {
    this.yE = this.yE + this.latSpeed;
    if (this.yE > height - this.rE) {
      this.yE = height - this.rE;
    }
  }

  displayfear() {
    //rect(this.xE, this.yE, this.rE, this.rE);
  if (this.life == "alive") {
    if (alert == false) {
        image(bunnyFearImgR, this.xE, this.yE, this.rE, this.rE);
      } else if (alert == true) {
        image(bunnyFearImgL, this.xE, this.yE, this.rE, this.rE);
      } else if (this.life == "dying") {
      image(bunnyDieImg, this.xE, this.yE, this.rE, this.rE);
      setTimeout(() => {        this.life = "dead";      }, 400);
    } else {}
  }
  }
  
    
    
    
  display() {
    //rect(this.xE, this.yE, this.rE, this.rE);
    if (this.life == "alive") {
      if (alert == false) {
        image(bunnyBaseImg, this.xE, this.yE, this.rE, this.rE);
      } else if (alert == true) {
        image(bunnyAimImg, this.xE, this.yE, this.rE, this.rE);
      }
    } else if (this.life == "dying") {
      image(bunnyDieImg, this.xE, this.yE, this.rE, this.rE);
      setTimeout(() => {        this.life = "dead";      }, 400);
    } else {}
  }

  detect() {
    if (this.yE <= yPos + 25 && this.yE >= yPos - 25 && this.xE > xPos) {
      //console.log(yPos);
      alert = true;
    } else {
      alert = false;
    }
  }

  collision() {
    if (this.life == "alive") {
      if (
        dist(player.hbx, player.hby, this.xE, this.yE) <=
        (player.hbr+10 + this.rE) / 2
      ) {
        this.life = "dying";
        console.log(this.yE, this.xE);
        console.log(player.hbx, player.hby);
      }
    }
  }
}
