class Player {
  constructor(xPos, yPos) {
    this.r = 100;
    this.hbr = 60;
    this.x = xPos;
    this.y = yPos;
    this.hbx = 0; //this.x + 25;
    this.hby = 0; //this.y + 25;
    this.direction = "still";
    this.animation = "still";
    this.speed = 3;
    this.latSpeed = 5;
    this.jumpInt = 0;

    this.x1 = 0;
    this.y1 = 0;

    this.x2 = 0;
    this.y2 = 500;

    this.x3 = 0;
    this.y3 = 0;

    this.animD = 0;
    this.collision = false;
  }

  update() {
   // console.log(xPos, yPos);
    xPos = this.x;
    yPos = this.y;

    if (stage == 1) {
      if (this.x >= 500 && this.y >= 500) {
        stage = 2;

      }
    } else if (stage == 2) {
      if (this.x >= 500 && this.y <= 6) {
        stage = 3;

      }
      } else if (stage ==3) {
        if (this.x <= 0 && this.y >= 500)
        stage = 4;

      }
  }

  pos1() {
    this.x = this.x1;
    this.y = this.y1;
  }

  pos2() {
    this.x = this.x2;
    this.y = this.y2;
  }
  
  pos3() {
    this.x = this.x3;
    this.y = this.y3;
  }

  display() {
    this.hbx = this.x + 25;
    this.hby = this.y + 40;
   //rect(this.hbx,this.hby,this.hbr);
    switch (this.animation) {
      default:
        if (this.animD == 1) {
          image(playerImgR, xPos, yPos, this.r, this.r);
        }
        if (this.animD == 2) {
          image(playerImgL, xPos, yPos, this.r, this.r);
        } else {
          image(playerImgR, xPos, yPos, this.r, this.r);
        }
        break;
      case "RunR":
        image(playerImgRunR, xPos, yPos, this.r, this.r);
        this.animation = "StillR";
        break;
      case "JumpR":
        image(playerImgRunR, xPos, yPos, this.r, this.r);
        this.animation = "StillR";
        break;
      case "RunL":
        image(playerImgRunL, xPos, yPos, this.r, this.r);
        this.animation = "StillL";
        break;
      case "JumpL":
        image(playerImgRunL, xPos, yPos, this.r, this.r);
        this.animation = "StillL";
        break;
    }
  }

  // use relative height of obj instead of height
  gravity() {
    if (this.collision == false) {
      this.y = this.y + this.speed;
    }
  }

  move() {
    if (this.jumpInt == 1) {
      this.y = this.y - 40;
      this.jumpInt = 2;
    } else if (this.jumpInt == 2) {
      this.y = this.y - 40;
      this.jumpInt = 3;
    } else if (this.jumpint == 3) {
      this.y = this.y - 30;
      this.jumpInt = 0;
    }

    switch (this.direction) {
      case "still":
        break;

      case "right":
        this.animD = 1;
        if (this.x >= width - this.r) {
          this.x = width - this.r;
          //this.direction = 'still';
        }
        this.animation = "RunR";
        this.x += this.latSpeed;
        break;

      case "left":
        this.animD = 2;

        if (this.x <= 0) {
          this.x = 0;
        }
        this.x -= this.latSpeed;
        this.animation = "RunL";
        //console.log("L");
        break;

      default:
        break;
    }
  }

  collisionG() {
    //bottom Collision
    if (this.y >= height - this.r) {
      this.collision = true;
      this.y = height - this.r;
    } else {
      this.collision = false;
    }

    if (
      this.hbx < terrain.tx1 + terrain.trx &&
      this.hbx + this.hbr > terrain.tx1 &&
      this.hby < terrain.ty1 + terrain.try &&
      this.hby + this.hbr > terrain.ty1
    ) {
      // collision detected!
      this.collision = true;
    } else {
    }
    if (
      this.hbx < terrain.tx2 + terrain.trx &&
      this.hbx + this.hbr > terrain.tx2 &&
      this.hby < terrain.ty2 + terrain.try &&
      this.hby + this.hbr > terrain.ty2
    ) {
      // collision detected!
      this.collision = true;
    } else {
    }
    if (
      this.hbx < terrain.tx3 + terrain.trx &&
      this.hbx + this.hbr > terrain.tx3 &&
      this.hby < terrain.ty3 + terrain.try &&
      this.hby + this.hbr > terrain.ty3
    ) {
      // collision detected!
      this.collision = true;
    } else {
    }
  }
  collisionE() {
    if (enemy1.life !== "dead") {
      if (
        dist(this.x, this.y, enemy1.xE, enemy1.yE) <=
        (this.hbr + 50 + enemy1.rE) / 2
      ) {
        if (player.animD == 1) {
          image(slashImgR, player.x +30, player.y, player.r, player.r);
        } else if (player.animD == 2) {
          image(slashImgL, player.x -30, player.y, player.r, player.r);
        }
      }
    }
  }
}
