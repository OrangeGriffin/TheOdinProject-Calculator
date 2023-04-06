const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //alert(button.id);
    getValue(event);
  });
});

const getValue = function(event) {
    let value = Number(event.target.innerText);
    console.log(value);
    console.log(typeof value);
    displayValue(value)
    return value
}

const displayValue = function(value) {
    display.innerText = value;
}