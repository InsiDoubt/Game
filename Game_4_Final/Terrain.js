class Terrain {
  constructor() {
    this.tx1 = 0;
    this.ty1 = 0;
    this.tx2 = 0;
    this.ty2 = 0;
    this.tx3 = 0;
    this.ty3 = 0;
    this.trx = 400;
    this.try = 50;
  }

  pos1() {
    this.tx1 = -50;
    this.ty1 = 150;
    this.tx2 = 300;
    this.ty2 = 300;
    this.tx3 = -20;
    this.ty3 = 450;
  }

  pos2() {
    this.tx1 = 200;
    this.ty1 = 450;
    this.tx2 = -20;
    this.ty2 = 275;
    this.tx3 = 200;
    this.ty3 = 100;
  }

  pos3() {
    this.tx1 = -50;
    this.ty1 = 150;
    this.tx2 = 300;
    this.ty2 = 300;
    this.tx3 = -60;
    this.ty3 = 450;
  }

  display() {
    image(terrainImg, this.tx1, this.ty1, this.trx, this.try);
    image(terrainImg, this.tx2, this.ty2, this.trx, this.try);
    image(terrainImg, this.tx3, this.ty3, this.trx, this.try);
  }
}
