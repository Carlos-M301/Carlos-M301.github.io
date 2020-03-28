
           function actualiza(){
            let tiempo = new Date();
            let hora = tiempo.getHours(),
                minutos = tiempo.getMinutes(),
                segundos = tiempo.getSeconds(),
                horario;
                if(hora > 12){
                    hora -=12;
                    horario = "PM";
                }
                else{
                    horario="AM";
                }
                if (hora === 0){
                    hora = 12;
                }
                if(hora < 10){
                    hora = "0"+hora;
                }
                if(minutos<10){
                    minutos = "0"+minutos;
                }
                if(segundos<10){
                    segundos = "0"+segundos;
                }
                document.querySelector("#reloj").textContent = hora+":"+minutos+":"+segundos+" "+horario;
                setTimeout(actualiza,1000);
        }
        actualiza();