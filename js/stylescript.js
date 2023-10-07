let background=document.querySelector("#maincontainer");
let probuttons=document.querySelectorAll(".professional");
background.style.backgroundColor="rgb(238, 238, 238)";
document.querySelector("#themebutton").addEventListener("click",()=>{     
    background.style.backgroundColor= (background.style.backgroundColor==="rgb(238, 238, 238)")? "rgb(50, 50, 50)" : "rgb(238, 238, 238)";        
});
document.querySelector("#modebutton").addEventListener("click",()=>{
    probuttons.forEach(element => {
        element.style.display = (element.style.display ==="block")? "none" : "block";
    });
});