//Variable Declarations
const html = document.querySelector("html");

const body = document.querySelector("body");

const digits = Array.from(document.querySelector(".digits").children).filter(
    (elem, i) => i !== 2
  ),
  colon = document.getElementById("colon"),
  startVal = 0;

const btnContainer = document.createElement("div"),
  start = document.createElement("button"),
  reset = document.createElement("button"),
  mainDiv = document.querySelector("div");

let timing = "paused";

let ms, hs, so, sh;

//Function Declarations
function updateMS() {
  digits[3].textContent < 9
    ? digits[3].textContent++
    : (digits[3].textContent = 0);
}

function updateHS() {
  digits[2].textContent < 5
    ? digits[2].textContent++
    : (digits[2].textContent = 0);
}

function updateSO() {
  digits[1].textContent < 9
    ? digits[1].textContent++
    : (digits[1].textContent = 0);
}

function updateSH() {
  digits[0].textContent++;
  clearInterval(ms);
  clearInterval(hs);
  clearInterval(so);
  clearInterval(sh);
  digits.map((elem, i) => {
    i > 0 ? (elem.textContent = startVal) : 0;
    elem.style.color = "red";
    colon.style.color = "red";
  });
}

function myTimer() {
  ms = window.setInterval(updateMS, 10);
  hs = window.setInterval(updateHS, 100);
  so = window.setInterval(updateSO, 1000);
  sh = window.setInterval(updateSH, 10000);
}

//Button Functions
start.onmousedown = () => {
  if (timing === "paused") {
    timing = "running";
    myTimer();
  }
};

reset.onmousedown = () => {
  timing = "paused";
  digits.map(elem => {
    elem.textContent = startVal;
    elem.style.color = "white";
  });
  colon.style.color = "white";

  clearInterval(ms);
  clearInterval(hs);
  clearInterval(so);
  clearInterval(sh);
};

//Init, Style Declarations
html.setAttribute("style", "height: 100%; width: 100%;");

body.setAttribute(
  "style",
  "height: inherit; width: inherit; background-color: black; font-family: Helvetica, sans-serif; display: flex; justify-content: center; align-items: center"
);

btnContainer.setAttribute(
  "style",
  "display: flex; justify-content: space-around; padding: 15px 0;)"
);

btnContainer.setAttribute("id", "btnContainer");

mainDiv.appendChild(btnContainer);
btnContainer.appendChild(start);
btnContainer.appendChild(reset);

const btns = document.querySelectorAll("#btnContainer button");
btns.forEach(elem =>
  elem.setAttribute(
    "style",
    "padding: 10px 12px; border: none; color: white; font-size: .9rem; font-weight: bold; transition-duration: 0.25s; outline: none; cursor: pointer;"
  )
);

btns[0].style.backgroundColor = "green";
btns[0].textContent = "Start!";

btns[1].style.backgroundColor = "orangered";
btns[1].textContent = "Reset!";

//Event Listeners
btns[0].addEventListener(
  "mouseenter",
  e => (e.target.style.backgroundColor = "mediumseagreen")
);

btns[0].addEventListener(
  "mouseleave",
  e => (e.target.style.backgroundColor = "green")
);

btns[1].addEventListener(
  "mouseenter",
  e => (e.target.style.backgroundColor = "coral")
);

btns[1].addEventListener(
  "mouseleave",
  e => (e.target.style.backgroundColor = "orangered")
);

digits.map(elem => {
  elem.textContent = startVal;
  elem.style.color = "white";
});
colon.style.color = "white";
