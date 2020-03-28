//Un poco de jquery.
$("#go").on("click",(e)=>{
    $.ajax({
        url:"https://coronavirus-19-api.herokuapp.com/all",
        success: function(result){
            
            $(".main").html("Casos:"+result.cases+", Muertes"+result.deaths+", recovered"+result.recovered);
            //$(".main").html(`Casos ${result.cases}, Muertes ${result.deaths}`);
        }
    });
});