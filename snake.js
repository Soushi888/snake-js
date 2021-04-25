function Snake() {
  let x = 0;
  let y = 0;
  let xSpeed = scale;
  let ySpeed = 0;

  this.draw = () => {
    ctx.fillStyle = "#20a707";
    ctx.fillRect(x, y, scale, scale);
  }

  this.update = () => {
    x += xSpeed;
    y += ySpeed;

    if (x > canvas.width) {
      x = 0;
    }
    if (x < 0) {
      x = 300;
    }
    if (y > canvas.height) {
      y = 0;
    }
    if (y < 0) {
      y = 300;
    }
  }

  this.changeDirection = (direction) => {
    switch (direction) {
      case "Up" :
        xSpeed = 0;
        ySpeed = -scale;
        break;
      case "Down" :
        xSpeed = 0;
        ySpeed = scale;
        break;
      case "Left" :
        xSpeed = -scale;
        ySpeed = 0;
        break;
      case "Right" :
        xSpeed = scale;
        ySpeed = 0;
        break
    }
  }
}
