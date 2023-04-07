const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //alert(button.id);
    getValue(event);
  });
});

const displayValue = function(value) {
    display.innerText = value;
}