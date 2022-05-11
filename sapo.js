class Sapo {
  
  constructor() {
    this.r = 120;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 3;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }

  hits(abelha) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = abelha.x + abelha.r * 0.5;
    let y2 = abelha.y + abelha.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, abelha.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(sImg, this.x, this.y, this.r, this.r);
    
    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);  
  }
}