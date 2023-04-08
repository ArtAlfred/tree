const level_1 = document.querySelector(".level_1");
const starts = document.querySelector(".start");
const gameOver = document.querySelector("#gameOver");

const monkeyBtn = document.querySelector("#monkey");
const shellBtn = document.querySelector("#shell");
const babyKingkongBtn = document.querySelector("#baby_kingkong");

const monkey_text = document.querySelector(".monkey-text");
const shell_text = document.querySelector(".shell-text");
const babyKingkong_text = document.querySelector(".babyKingkong-text");

const time = document.querySelector("#time");

// STAR
let star = "";

for (let i = 0; i <= 10; i++) {
  document.getElementById("star_tree_1").innerHTML +=
    "<center><span>" + star + "</span><br></center>";
  star += "*";
}

let stars = document.querySelectorAll("#star_tree_1 span");

function sparkle() {
  let colors = ["red", "green", "blue", "yellow", "pink"];
  let chosen_color = Math.floor(Math.random() * colors.length);
  stars.forEach(function (star) {
    star.style.color = colors[chosen_color];
  });
}

let count = 8;
let countDown;

function timer() {
  time.innerHTML = count;
  count--;

  if (count < 0) {
    clearInterval(countDown);
    setTimeout(game_Over, 500);

    level_1.style.filter = "brightness(30%)";
    starts.style.display = "block";
  }
}

function start() {
  clearInterval(countDown);
  count = 8;
  countDown = setInterval(timer, 1000);
  level_1.style.filter = "brightness(100%)";
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
  stars.forEach(function (star) {
    star.style.color = "";
  });
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
    level_1.style.filter = "brightness(30%)";
    starts.style.display = "block";

    interval = setInterval(sparkle, 400);
  }
}
