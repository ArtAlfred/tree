const starts = document.querySelector(".start");
const gameOver = document.querySelector("#gameOver");

const monkeyBtn = document.querySelector("#monkey");
const shellBtn = document.querySelector("#shell");
const babyKingkongBtn = document.querySelector("#baby_kingkong");

const monkey_text = document.querySelector(".monkey-text");
const shell_text = document.querySelector(".shell-text");
const babyKingkong_text = document.querySelector(".babyKingkong-text");

const time = document.querySelector("#time");

const colorDisplay = document.querySelector("#color_display");

// STAR
let star = "";
let stars = document.querySelectorAll("#star_tree_1 span");

let colors;

function sparkle() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  colors = `rgb(${red}, ${green}, ${blue})`;

  stars.forEach((star) => {
    star.style.color = colors;
  });

  colorDisplay.innerHTML = colors;
}

let count = 7;
let countDown;
let interval;

function timer() {
  time.innerHTML = count;
  count--;

  if (count < 0) {
    clearInterval(countDown);
    setTimeout(game_Over, 500);

    starts.style.display = "block";

    const sad = new Audio("./img/sound/sad.mp3");
    sad.play();
  }
}

function start() {
  clearInterval(countDown);
  count = 7;
  countDown = setInterval(timer, 1000);
  starts.style.display = "none";

  function monkey(brightness, text) {
    brightness.style.filter = "";
    text.classList.remove("text-decoration-line-through");
    text.classList.remove("opacity-25");
  }

  monkey(monkeyBtn, monkey_text);
  monkey(shellBtn, shell_text);
  monkey(babyKingkongBtn, babyKingkong_text);

  clickImg = 0;

  clearInterval(interval);

  const findSound = new Audio("./img/sound/btn.mp3");
  findSound.play();
}

function game_Over() {
  gameOver.style.display = "grid";
}

function try_again() {
  gameOver.style.display = "none";
}

function monkey(brightness, text) {
  brightness.style.filter = "brightness(30%)";
  text.classList.add("text-decoration-line-through");
  text.classList.add("opacity-25");

  const sound = new Audio("./img/sound/pop.mp3");
  sound.play();
}

monkeyBtn.addEventListener("click", () => monkey(monkeyBtn, monkey_text));
shellBtn.addEventListener("click", () => monkey(shellBtn, shell_text));
babyKingkongBtn.addEventListener("click", () =>
  monkey(babyKingkongBtn, babyKingkong_text)
);

let clickImg = 0;

function detectClicked() {
  clickImg++;

  if (clickImg >= 3) {
    clearInterval(countDown);
    starts.style.display = "block";

    interval = setInterval(sparkle, 400);

    const findSound = new Audio("./img/sound/congrats.mp3");
    findSound.play();
  }
}
