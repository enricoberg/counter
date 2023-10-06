const box=document.querySelector("#valuebox");
document.querySelector("#button-plus").addEventListener("click",()=>{
    box.value=Number(box.value)+1;
});
document.querySelector("#button-minus").addEventListener("click",()=>{
    box.value=Number(box.value)-1;
});

