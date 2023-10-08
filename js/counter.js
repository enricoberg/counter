const box = document.querySelector("#valuebox");
const decimalbox = document.querySelector("#decimalbox");
const add100=document.querySelector("#button-plus");
const add1=document.querySelector("#decimal-plus");
const sub100=document.querySelector("#button-minus");
const sub1=document.querySelector("#decimal-minus");
let numbertimer;
const timerspeed=100;
let currentNumber = 0;

function displayNumber(number) {
  let decimals = Math.abs((number % 1) * 100);
  let integerpart = number>0 ? Math.floor(number) : Math.ceil(number);
  integerpart= integerpart==100 ? 0 : integerpart;
  
  box.value = (number<0 && number>-1)? "-0" : integerpart;
  decimalbox.value =  String(Math.abs(decimals).toFixed(0)).padStart(2, "0");
}
//----------------------------------------------------
// EVENTS FOR HANDLING SINGLE CLICKS OF THE BUTTON----

add100.addEventListener("click", () => {
  currentNumber = currentNumber + 1;
  displayNumber(currentNumber);
});

sub100.addEventListener("click", () => {
  currentNumber = currentNumber - 1;
  displayNumber(currentNumber);
});

add1.addEventListener("click", () => {
  currentNumber = (currentNumber  + 0.01);
  displayNumber(currentNumber);
});

sub1.addEventListener("click", () => {
  currentNumber = (currentNumber  - 0.01) ;
  displayNumber(currentNumber);
});

//----------------------------------------------------
//EVENTS FOR HANDLING PROLONGED CLICKS----------------
function startTimer(increment){
  
    numbertimer=setInterval(()=>{
    currentNumber += increment;
    displayNumber(currentNumber);
  },timerspeed);

}
function stopTimer(){
  clearInterval(numbertimer);
  numbertimer=null;
}
add100.addEventListener("mousedown", () => {
  startTimer(1);
});

add100.addEventListener("mouseup", () => {
  stopTimer();
});

add1.addEventListener("mousedown", () => {
  startTimer(0.01);
});

add1.addEventListener("mouseup", () => {
  stopTimer();
});

sub100.addEventListener("mousedown", () => {
  startTimer(-1);
});

sub100.addEventListener("mouseup", () => {
  stopTimer();
});

sub1.addEventListener("mousedown", () => {
  startTimer(-0.01);
});

sub1.addEventListener("mouseup", () => {
  stopTimer();
});
//----------------------------------------------------
//EVENTS FOR MOBILE USE-------------------------------

add100.addEventListener("touchstart", (event) => {
  event.preventDefault();
  startTimer(1);
});

add100.addEventListener("touchend", () => {
  stopTimer();
});

add1.addEventListener("touchstart", (event) => {
  event.preventDefault();
  startTimer(0.01);
});

add1.addEventListener("touchend", () => {
  stopTimer();
});

sub100.addEventListener("touchstart", (event) => {
  event.preventDefault();
  startTimer(-1);
});

sub100.addEventListener("touchend", () => {
  stopTimer();
});

sub1.addEventListener("touchstart", (event) => {
  event.preventDefault();
  startTimer(-0.01);
});

sub1.addEventListener("touchend", () => {
  stopTimer();
});