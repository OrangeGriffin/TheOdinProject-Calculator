const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")

const add = function(a,b) {

}

const subtract = function(a,b) {

}

const multiply = function(a,b) {

}

const divide = function(a,b) {

}

const operate = function() {

}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //alert(button.id);
    getValue(event);
  });
});

const displayValue = function(value) {
    display.innerText = value;
}