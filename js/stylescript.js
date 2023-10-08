let background=document.querySelector("#maincontainer");
let prorow=document.querySelector(".professional");
let modebutton= document.querySelector("#modebutton");
modebutton.innerHTML="BASIC MODE";
prorow.style.display = "block";
background.style.backgroundColor="rgb(238, 238, 238)";

document.querySelector("#themebutton").addEventListener("click",()=>{     
    background.style.backgroundColor= (background.style.backgroundColor==="rgb(238, 238, 238)")? "rgb(50, 50, 50)" : "rgb(238, 238, 238)";        
});

modebutton.addEventListener("click",()=>{
        modebutton.innerHTML= ( modebutton.innerHTML  ==="PRO MODE")? "BASIC MODE" : "PRO MODE";
        prorow.style.display = (prorow.style.display ==="block")? "none" : "block";
    });


//LOOP DEL COLORE DEL TITOLO 
const h1Element = document.querySelector("h1");
const colors=["#0d6efd","#6610f2","#6f42c1","#d63384","#dc3545","#fd7e14","#ffc107","#198754","#20c997","#0dcaf0"];
let currentIndex = 0;
function changeColor() {
    h1Element.style.color =  colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}
setInterval(changeColor, 250);