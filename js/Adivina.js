//prompt("Hola soy javaconst");
const input = document.querySelector("#input");
const button = document.querySelector("#adivina");
const reiniciar = document.querySelector("#reiniciar");
let aleatorio = Math.round(Math.random()*100);
let nodo;
let contador=0;
let capturanodo;
input.value = " ";
button.addEventListener("click", (e)=>{
    nodo = document.createElement('li');
    capturanodo = document.createTextNode(input.value);
    nodo.appendChild(capturanodo);
    if(input.value<aleatorio){
    alert("Más arriba");
    document.getElementById("lista").appendChild(nodo);
    contador+=1;
    }else if(input.value>aleatorio){
        alert("Más abajo");
    document.getElementById("lista").appendChild(nodo);
    contador+=1;
    input.value = " ";
    }else{
        alert("Le atinaste");
        aleatorio = Math.round(Math.random()*100);
        input.value = " ";
    }
    
});