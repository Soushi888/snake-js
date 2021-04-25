function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale;
  this.ySpeed = 0;

  this.draw = () => {
    ctx.fillStyle = "#ee4343";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = () => {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}
