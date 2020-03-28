let datos;
window.onload = (e)=>{
$.ajax({
        url:"http://www.7timer.info/bin/civillight.php?lon=22.233105&lat=-97.861099&unit=metric&output=json&tzshift=0",
        success: function(result){      
             datos = JSON.parse(result);
            for(let i=0;i<datos.dataseries.length;i++){
                let date = datos.dataseries[i].date;
                let weather = datos.dataseries[i].weather;
                let min = datos.dataseries[i].temp2m.min;
                let max = datos.dataseries[i].temp2m.max;
                $("#clima").html(`<span class='date'>${date}</span> <span class='weather'>${weather}</span> <span class='min'>${min}°C</span> <span class='max'>${max}°C</span>`);
            }
        }
    });
}
