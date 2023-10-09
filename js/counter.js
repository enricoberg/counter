const box = document.querySelector("#valuebox");
const decimalbox = document.querySelector("#decimalbox");
const add100=document.querySelector("#button-plus");
const add1=document.querySelector("#decimal-plus");
const sub100=document.querySelector("#button-minus");
const sub1=document.querySelector("#decimal-minus");
const counterbuttons=[add100,add1,sub100,sub1];
const increments=[1,0.01,-1,-0.01];
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
//FUNCTIONS TO HANDLE PROLONGED CLICKS----------------
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


//-------------------------------------------------------
// EVENTS FOR HANDLING SINGLE CLICKS AND PROLONGED CLICKS
for (let i=0; i<counterbuttons.length; i++) {
  counterbuttons[i].addEventListener("click", () => {
    currentNumber = currentNumber + increments[i];
    displayNumber(currentNumber);
  });
  
  counterbuttons[i].addEventListener("mousedown", () => {
    
    startTimer(increments[i]);
  });
  
  counterbuttons[i].addEventListener("mouseup", () => {
    
    stopTimer();
  });

  counterbuttons[i].addEventListener("touchstart", (e) => {
    e.preventDefault();
    startTimer(increments[i]);
  });
  
  counterbuttons[i].addEventListener("touchend", () => {
    
    stopTimer();
  });
}

