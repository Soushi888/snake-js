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

  this.changeDirection = (direction) => {
    switch (direction) {
      case "Up" :
        this.xSpeed = 0;
        this.ySpeed = -scale;
        break;
      case "Down" :
        this.xSpeed = 0;
        this.ySpeed = scale;
        break;
      case "Left" :
        this.xSpeed = -scale;
        this.ySpeed = 0;
        break;
      case "Right" :
        this.xSpeed = scale;
        this.ySpeed = 0;
        break
    }
  }
}
