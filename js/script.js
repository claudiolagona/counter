const rowFirst = document.createElement("div");
const rowSecond = document.createElement("div");
const rowThird = document.createElement("div");
const rowFourth = document.createElement("div");
const heading = document.createElement("h1");
const span = document.createElement("span");
const increaseButton = document.createElement("button");
const decreaseButton = document.createElement("button");
const resetButton = document.createElement("button");
rowFirst.setAttribute("class", "row");
rowFirst.id = "row-first";
heading.textContent = "Your Count is:";
rowSecond.setAttribute("class", "row");
rowSecond.id = "row-second";
span.textContent = "0";
span.id = "result";
rowThird.setAttribute("class", "row");
rowThird.id = "row-third";
increaseButton.id = "increase";
increaseButton.textContent = "+";
decreaseButton.id = "decrease";
decreaseButton.textContent = "-";
rowFourth.setAttribute("class", "row");
rowFourth.id = "row-fourth";
resetButton.id = "reset";
resetButton.textContent = "Reset";
increaseButton.setAttribute("class", "interaction active");
decreaseButton.setAttribute("class", "interaction active");
resetButton.setAttribute("class", "interaction active");
document.getElementById("container").append(rowFirst);
document.getElementById("row-first").append(heading);
document.getElementById("container").append(rowSecond);
document.getElementById("row-second").append(span);
document.getElementById("container").append(rowThird);
document.getElementById("row-third").append(decreaseButton);
document.getElementById("row-third").append(increaseButton);
document.getElementById("container").append(rowFourth);
document.getElementById("row-fourth").append(resetButton);

let currentResult = span;
let result = parseInt(span.innerHTML);

function notActive() {
  if (result === 0) {
    decreaseButton.classList.remove("active");
    resetButton.classList.remove("active");
  } else {
    decreaseButton.classList.add("active");
    resetButton.classList.add("active");
  }
}

function decrease(num) {
  if (num > 0) {
    num--;
  }
  return num;
}

function increase(num) {
  num++;
  return num;
}

function reset(num) {
  num = 0;
  return num;
}

notActive();

decreaseButton.addEventListener("click", () => {
  result = decrease(result);
  notActive();
  currentResult.innerHTML = result;
});

increaseButton.addEventListener("click", () => {
  result = increase(result);
  notActive();
  currentResult.innerHTML = result;
});

resetButton.addEventListener("click", () => {
  result = reset(result);
  notActive();
  currentResult.innerHTML = result;
});
