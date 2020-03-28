const stringaJson = document.querySelector("#convertjson");
const JsonaString = document.querySelector("#convertString");
let nombre = document.querySelector("#nombre");
let contraseña = document.querySelector("#pass");
let correo = document.querySelector("#correo");
let myJson= {name : " ", contraseña : " ", correo:" "};
let myObjeto;
stringaJson.addEventListener("click",(e)=>{
    let myObjeto;
    myJson= {name : nombre.value, password : contraseña.value, email:correo.value};
    myObjeto = JSON.stringify(myJson);
    document.querySelector("#json").textContent = myObjeto;
});
JsonaString.addEventListener("click",(e)=>{
    myJson = document.querySelector("#json").value;
    myObjeto = JSON.parse(myJson);
    nombre.value = myObjeto.name;
    contraseña.value = myObjeto.password;
    correo.value = myObjeto.email;
});