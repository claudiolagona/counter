//Creation of the rows
const rowFirst = document.createElement("div");
rowFirst.setAttribute("class", "row");
rowFirst.id = "row-first";

const rowSecond = document.createElement("div");
rowSecond.setAttribute("class", "row");
rowSecond.id = "row-second";

const rowThird = document.createElement("div");
rowThird.setAttribute("class", "row");
rowThird.id = "row-third";

const rowFourth = document.createElement("div");
rowFourth.setAttribute("class", "row");
rowFourth.id = "row-fourth";

//Creation of text elements
const heading = document.createElement("h1");
heading.textContent = "Your Count is:";

const span = document.createElement("span");
span.textContent = "0";
span.id = "result";

//Creation of the buttons
const increaseButton = document.createElement("button");
increaseButton.id = "increase";
increaseButton.textContent = "+";
increaseButton.setAttribute("class", "interaction active");

const decreaseButton = document.createElement("button");
decreaseButton.id = "decrease";
decreaseButton.textContent = "-";
decreaseButton.setAttribute("class", "interaction active");

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.textContent = "Reset";
resetButton.setAttribute("class", "interaction active");

//Append elements
document.getElementById("container").append(rowFirst);
document.getElementById("row-first").append(heading);
document.getElementById("container").append(rowSecond);
document.getElementById("row-second").append(span);
document.getElementById("container").append(rowThird);
document.getElementById("row-third").append(decreaseButton);
document.getElementById("row-third").append(increaseButton);
document.getElementById("container").append(rowFourth);
document.getElementById("row-fourth").append(resetButton);

//Initialize counter
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
