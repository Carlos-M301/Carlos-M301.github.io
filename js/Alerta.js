let cerrarX=[]
cerrarX=document.querySelectorAll(".tachita");
let arrayP=[]
arrayP=document.querySelectorAll(".Padre");

for(let i=0;i<cerrarX.length;i++){
    cerrarX[i].addEventListener("click", (e)=>{
        arrayP[i].style.display='none'
    });
}


