function cronometrar(){
      
  document.querySelector("#tiempo").innerHTML="00:00:00";
  function trecorrido(){
    let min=0,seg=0,mils=0;
    if(mils <100){
        mils++;
    }
    else{
      mils=0;
    }
    if(seg <60 ){
      seg++;
    }
    else{
      seg =0;
      min++;
    }
    
  }
}
cronometrar();