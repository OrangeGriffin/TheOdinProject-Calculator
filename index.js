const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
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
  return a / b;
};

const operate = function (num1, num2, operators) {
  console.log("This is the operate function");
  console.log(num1, num2, operators);

  switch(operators[1]) {
    case "equals":
      switch (operators[0]) {
        case "add":
          console.log(add(num1,num2))
      }

  }
};

const handleOperands = function (num) {};

const handleOperator = function (event) {};

const handleInput = function (event) {
  if (
    event.target.classList.contains("number") ||
    event.target.classList.contains("decimal")
  ) {
    enteredValue += event.target.innerText;
    console.log(enteredValue);
    handleDisplay(enteredValue);
  } else if (event.target.classList.contains("operator") && num1 === null) {
    operator = event.target.innerText;
    display.innerText = operator;
    num1 = Number(enteredValue);
    console.log("num1 is ", num1);
    operators.push(event.target.id)
    console.log(operators)
    enteredValue = "";
  } else if (event.target.classList.contains("operator") && num1 !== null) {
    num2 = Number(enteredValue);
    console.log("num2 is ", num2);
    operators.push(event.target.id)
    operate(num1, num2, operators);
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
