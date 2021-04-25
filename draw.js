"use strict"

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake, fruit;

const setup = (() => {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();
  fruit.draw();
  console.log(fruit);

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    fruit.draw();
    snake.draw();

    if (snake.eat(fruit)) {
      console.log("Fruit ate !")
      fruit.pickLocation();
      fruit.draw();
    }
  }, 250)
});
setup();

window.addEventListener('keydown', (evt) => {
  const direction = evt.key.replace("Arrow", "");
  console.log(direction)
  snake.changeDirection(direction);
})
