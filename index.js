const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
let enteredNum = "";
let enteredValue = "";
let num1 = null;
let num2 = null;
let operators = [];
let operatorSymbol = ["+", "=", "-", "/", "*"];

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

const clear = function () {
  enteredNum = "";
  enteredValue = "";
  num1 = null;
  num2 = null;
  operators = [];
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
  switch (event.type) {
    case "click":
      operators.push(event.target.id);

      if (operators.length == 2 && operators[1] === "equals") {
        operate(num1, num2, operators[0]);
        operators = [];
      }
      break;
    case "keydown":
      switch (event.key) {
        case "-":
          console.log("operator is minus");
          operators.push("subtract");
          if (operators.length == 2 && operators[1] === "equals") {
            operate(num1, num2, operators[0]);
            operators = [];
          }
          break;
        case "+":
          console.log("operator is plus");
          operators.push("add");
          if (operators.length == 2 && operators[1] === "equals") {
            operate(num1, num2, operators[0]);
            operators = [];
          }
          break;
        case "*":
          console.log("operator is multiply");
          operators.push("multiply");
          if (operators.length == 2 && operators[1] === "equals") {
            operate(num1, num2, operators[0]);
            operators = [];
          }
          break;
        case "/":
          console.log("operator is divide");
          operators.push("divide");
          if (operators.length == 2 && operators[1] === "equals") {
            operate(num1, num2, operators[0]);
            operators = [];
          }
          break;
        case "=":
          console.log("operator is equals");
          operators.push("equals");
          if (operators.length == 2 && operators[1] === "equals") {
            operate(num1, num2, operators[0]);
            operators = [];
          }
          break;
      }
  }
};

const handleInput = function (event) {
  switch (event.type) {
    case "click":
      if (event.target.classList.contains("number")) {
        enteredNum += event.target.innerText;
        handleDisplay(enteredNum);
      } else if (event.target.classList.contains("decimal")) {
        if ((enteredNum === "" || !enteredNum.match(/\./g)) && !num1) {
          enteredNum += event.target.innerText;
          handleDisplay(enteredNum);
        }
      } else if (event.target.classList.contains("operator")) {
        handleOperands(enteredNum);
        handleDisplay(event.target.innerText);
        handleOperator(event);
      } else if (event.target.id === "clear") {
        clear();
        handleDisplay("clear");
      }
      break;
    case "keydown":
      console.log(event);
      if (event.code.includes("Digit")) {
        enteredNum += event.key;
        handleDisplay(enteredNum);
      } else if (event.code.includes("Period")) {
        if ((enteredNum === "" || !enteredNum.match(/\./g)) && !num1) {
          enteredNum += event.key;
          handleDisplay(enteredNum);
        }
      } else if (operatorSymbol.includes(event.key)) {
        handleOperands(enteredNum);
        handleDisplay(event.key);
        handleOperator(event);
      }
      break;
  }
};

const handleDisplay = function (enteredValue) {
  if (enteredNum.length < 55 && enteredValue !== "clear") {
    display.innerText = enteredValue;
  }

  if (enteredValue === "clear") {
    display.innerText = 0;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event);
    handleInput(event);
  });
});

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key.match(/[0-9]/) || operatorSymbol.includes(event.key) || event.code.includes("Period")) {
      handleInput(event);
    }
  },
  false
);
