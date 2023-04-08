const timer = document.querySelector("#timer");
const okay = document.querySelector("#okay");
const thanks = document.querySelector("#thanks");
const start = document.querySelector("#start");
const start_Again = document.querySelector("#start_Again");

const w_1_1 = document.querySelectorAll(".w_1_1");
const w_2_2 = document.querySelectorAll(".w_2_2");
const w_3_3 = document.querySelectorAll(".w_3_3");

let countDown = 5;

let countdownInterval;

function startAgain() {
  document.querySelector("#q-1").style.filter = "blur(0px)";
  document.querySelector("#q-2").style.filter = "blur(0px)";
  document.querySelector("#q-3").style.filter = "blur(0px)";

  let countDown = 7;

  countdownInterval = setInterval(count, 1000);

  function count() {
    timer.innerHTML = countDown;
    countDown--;
    if (countDown < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".modal-fail").style.display = "block";
      document.querySelector("#q-1").style.filter = "blur(3px)";
      document.querySelector("#q-2").style.filter = "blur(3px)";
      document.querySelector("#q-3").style.filter = "blur(3px)";

      ans_1.style.borderColor = "";
      ans_1.style.color = "";
      q_1.style.border = "";

      w_1_1.forEach((btn) => {
        btn.disabled = "";
      });

      ans_2.style.borderColor = "";
      ans_2.style.color = "";
      q_2.style.border = "";

      w_2_2.forEach((btn) => {
        btn.disabled = "";
      });

      ans_3.style.borderColor = "";
      ans_3.style.color = "";
      q_3.style.border = "";

      w_3_3.forEach((btn) => {
        btn.disabled = "";
      });
    }
  }
}

let btnClicked = 0;

function perfectScore() {
  btnClicked++;

  if (btnClicked === 3) {
    clearInterval(countdownInterval);
    document.querySelector(".modal-fail").style.display = "block";
    document.querySelector("#q-1").style.filter = "blur(3px)";
    document.querySelector("#q-2").style.filter = "blur(3px)";
    document.querySelector("#q-3").style.filter = "blur(3px)";

    ans_1.style.borderColor = "";
    ans_1.style.color = "";
    q_1.style.border = "";

    w_1_1.forEach((btn) => {
      btn.disabled = "";
    });

    ans_2.style.borderColor = "";
    ans_2.style.color = "";
    q_2.style.border = "";

    w_2_2.forEach((btn) => {
      btn.disabled = "";
    });

    ans_3.style.borderColor = "";
    ans_3.style.color = "";
    q_3.style.border = "";

    w_3_3.forEach((btn) => {
      btn.disabled = "";
    });
  }
}

okay.addEventListener("click", () => {
  document.querySelector(".modal-fail").style.display = "none";
});

// TREE
let star = "";
let star_2 = "";
let star_3 = "";

for (let i = 0; i <= 5; i++) {
  document.getElementById("star_tree_1").innerHTML +=
    "<center>" + star + "<br>" + "</center>";
  star += "*";
}

for (let i = 0; i <= 5; i++) {
  document.getElementById("star_tree_2").innerHTML +=
    "<center>" + star_2 + "<br>" + "</center>";
  star_2 += "*";
}

for (let i = 0; i <= 5; i++) {
  document.getElementById("star_tree_3").innerHTML +=
    "<center>" + star_3 + "<br>" + "</center>";
  star_3 += "*";
}

const ans_1 = document.querySelector("#ans_1");
const ans_2 = document.querySelector("#ans_2");
const ans_3 = document.querySelector("#ans_3");

const q_1 = document.querySelector("#q-1");
const q_2 = document.querySelector("#q-2");
const q_3 = document.querySelector("#q-3");

ans_1.addEventListener("click", () => {
  ans_1.style.borderColor = "yellow";
  ans_1.style.color = "yellow";

  q_1.style.border = "1px solid yellow";

  w_1_1.forEach((btn) => {
    btn.disabled = true;
  });
});

ans_2.addEventListener("click", () => {
  ans_2.style.borderColor = "yellow";
  ans_2.style.color = "yellow";

  q_2.style.border = "1px solid yellow";

  w_2_2.forEach((btn) => {
    btn.disabled = true;
  });
});

ans_3.addEventListener("click", () => {
  ans_3.style.borderColor = "yellow";
  ans_3.style.color = "yellow";

  q_3.style.border = "1px solid yellow";

  w_3_3.forEach((btn) => {
    btn.disabled = true;
  });
});
