function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.draw = () => {
    ctx.fillStyle = "#20a707";

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = () => {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = {x: this.x, y: this.y};

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (
      this.x > canvas.width ||
      this.x < 0 ||
      this.y > canvas.height ||
      this.y < 0
    ) snake.die();
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
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total++;
      return true;
    }
    return false;
  }

  this.die = () => {
    alert("You died !");
    reset(app);
  }
}
