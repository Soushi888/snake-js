"use strict"

function Fruit() {
  let x, y;

  this.pickLocation = () => {
    x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  }

  this.draw = () => {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(x, y, scale, scale)
  }
}

