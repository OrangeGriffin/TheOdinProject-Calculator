const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let enteredValue = "";
let num1 = null;
let num2 = null;
let operator = "";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (num1, num2, operator) {};

const handleOperands = function (num) {
  if (!num1) {
    num1 = num;
  }
  console.log("This is handleOperands. Number is: ", num);
};

const handleOperator = function (event) {
  console.log("Went to handleOperator. Which is: ", event.target.innerText);
  display.innerText = event.target.innerText;
};

const handleInput = function (event) {
  if (
    event.target.classList.contains("number") ||
    event.target.classList.contains("decimal")
  ) {
    enteredValue += event.target.innerText;
    console.log(enteredValue);
    handleDisplay(enteredValue);
  } else if (event.target.classList.contains("operator")) {
    handleOperator(event);
    num = Number(enteredValue);
    handleOperands(num);
  }
};

const handleDisplay = function (enteredValue) {
  display.innerText = enteredValue;
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //console.log(event.target.classList.contains("decimal"))
    handleInput(event);
  });
});
