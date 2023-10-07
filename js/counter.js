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

add100.addEventListener("mousedown",()=>{
  
  numbertimer=setInterval(()=>{
    currentNumber = (currentNumber  + 1);
    displayNumber(currentNumber);
  },timerspeed);


});

add100.addEventListener("mouseup",()=>{
clearInterval(numbertimer);
numbertimer=null;
});

add1.addEventListener("mousedown",()=>{
  
  numbertimer=setInterval(()=>{
    currentNumber = (currentNumber  + 0.01);
    displayNumber(currentNumber);
  },timerspeed);


});

add1.addEventListener("mouseup",()=>{
clearInterval(numbertimer);
numbertimer=null;
});

sub100.addEventListener("mousedown",()=>{
  
  numbertimer=setInterval(()=>{
    currentNumber = (currentNumber  - 1);
    displayNumber(currentNumber);
  },timerspeed);


});

sub100.addEventListener("mouseup",()=>{
clearInterval(numbertimer);
numbertimer=null;
});

sub1.addEventListener("mousedown",()=>{
  
  numbertimer=setInterval(()=>{
    currentNumber = (currentNumber  - 0.01);
    displayNumber(currentNumber);
  },timerspeed);


});

sub1.addEventListener("mouseup",()=>{
clearInterval(numbertimer);
numbertimer=null;
});