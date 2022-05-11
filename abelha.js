class Abelha {

  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(aImg, this.x, this.y, this.r, this.r);


  }

}