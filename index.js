const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let enteredValue = '';
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

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //console.log(event.target.classList.contains("decimal"))
    displayValue(event);
  });
});

const displayValue = function (event) {
  if (
    event.target.classList.contains("number") ||
    event.target.classList.contains("decimal")
  ) {
    value = event.target.innerText;
    enteredValue += value;
    display.innerText = enteredValue;
  } else if (event.target.classList.contains("operator")) {
    if (!operator && enteredValue !== null) {
      num1 = Number(enteredValue);
      operator = event.target.id;
      //console.log(operator)
    } else {
      num2 = Number(enteredValue);
      switch (operator) {
        case "add":
          let result = add(num1, num2);
          display.innerText = result;
          break;
      }
    }
    enteredValue = "";
  }
};
