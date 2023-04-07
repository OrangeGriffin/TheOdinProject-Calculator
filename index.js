const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let enteredValue  = '';
let num1 = 0;
let num2 = 0;
let operator = '';

const add = function(a,b) {
  return a+b;
}

const subtract = function(a,b) {
  return a-b;
}

const multiply = function(a,b) {
  return a*b;
}

const divide = function(a,b) {
  return a/b;
}

const operate = function(num1, num2, operator) {

}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target);
    let value = event.target.innerText;
    displayValue(value);
  });
});

const displayValue = function(value) {
    enteredValue += value;
    display.innerText = enteredValue;
}