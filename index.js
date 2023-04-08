const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let enteredNum = "";
let enteredValue = "";
let num1 = null;
let num2 = null;
let operators = [];

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
  if (b !== 0) {
    return a / b;
  } else return "ERR";
};

const operate = function (numA, numB, operator) {
  switch (operator) {
    case "add":
      result = add(numA, numB);
      handleDisplay(result);
      num1 = result;
      num2 = null;
      break;
    case "subtract":
      result = subtract(numA, numB);
      handleDisplay(result);
      num1 = result;
      num2 = null;
      break;
    case "multiply":
      result = multiply(numA, numB);
      handleDisplay(result);
      num1 = result;
      num2 = null;
      break;
    case "divide":
      result = divide(numA, numB);
      handleDisplay(result);
      num1 = result;
      num2 = null;
      break;
  }
};

const handleOperands = function (num) {
  if (!num1) {
    num1 = Number(num);
    enteredNum = "";
  } else if (!num2) {
    num2 = Number(num);
    enteredNum = "";
  }
};

const handleOperator = function (event) {
  operators.push(event.target.id);

  if (operators.length == 2 && operators[1] === "equals") {
    operate(num1, num2, operators[0]);
    operators = [];
  }
};

const handleInput = function (event) {
  if (event.target.classList.contains("number")) {
    enteredNum += event.target.innerText;
    handleDisplay(enteredNum);
  } else if (event.target.classList.contains("operator")) {
    handleOperands(enteredNum);
    handleDisplay(event.target.innerText);
    handleOperator(event);
  }
};

const handleDisplay = function (enteredValue) {
  if (enteredNum.length < 55) {
    display.innerText = enteredValue;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleInput(event);
  });
});
