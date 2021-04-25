function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale;
  this.ySpeed = 0;

  this.draw = () => {
    ctx.fillStyle = "#20a707";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = () => {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = 300;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = 300;
    }
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

  this.eat = (fruit) => {
    return this.x === fruit.x && this.y === fruit.y;
  }
}
