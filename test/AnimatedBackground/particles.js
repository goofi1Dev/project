class particles {
  constructor(x, y, directionX, directionY, size, colors) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.colors = colors;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillstyle = this.colors;
    ctx.fill();
  }
  update() {
    if (this.x + this.size * 2 > canvas.width || this.x - this.size * 2 < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size * 2 > canvas.height || this.y - this.size * 2 < 0) {
      this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;

    let mouseRadius = 50;
    if (
      mouse.x - this.x < mouseRadius &&
      mouse.x - this.x > -mouseRadius &&
      mouse.y - this.y < mouseRadius &&
      mouse.y - this.y > -mouseRadius
    ) {
      if (this.size) {
        this.size += 3;
        this.x -= 1.5;
      }
    } else if (this.size > minsize) {
      this.size -= 1;
    }
    if (this.size < 0) {
      this.size = 0;
    }
    this.draw();
  }
}
