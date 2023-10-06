const box = document.querySelector("#valuebox");
const decimalbox = document.querySelector("#decimalbox");
let currentNumber = 0;

document.querySelector("#button-plus").addEventListener("click", () => {
  currentNumber = currentNumber + 1;
  displayNumber(currentNumber);
});

document.querySelector("#button-minus").addEventListener("click", () => {
  currentNumber = currentNumber - 1;
  displayNumber(currentNumber);
});

document.querySelector("#decimal-plus").addEventListener("click", () => {
  currentNumber = (currentNumber  + 0.01);
  displayNumber(currentNumber);
});

document.querySelector("#decimal-minus").addEventListener("click", () => {
  currentNumber = (currentNumber  - 0.01) ;
  displayNumber(currentNumber);
});

function displayNumber(number) {
  let decimals = Math.abs((number % 1) * 100);
  let integerpart = number>0 ? Math.floor(number) : Math.ceil(number);
  integerpart= integerpart==100 ? 0 : integerpart;
  console.log(number);
  box.value = integerpart;
  decimalbox.value = (number < 0 ? "-" : "") + String(Math.abs(decimals).toFixed(0)).padStart(2, "0");
}
