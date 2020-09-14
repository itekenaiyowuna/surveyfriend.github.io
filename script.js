"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=abuja&appid=c11f08d1921127f85ca61db6b9d17a4f";
$.ajax({
    url: url,
    success: function(result){
        console.log(result);
        console.log(result.name);
        let f = Math.round(result.main.temp * (9/5) - 459.67);
        let farenheit = f.toString();
        let windSpeed = Math.round(result.wind.speed / .44704);
        let wind = windSpeed.toString();
        $("#location").text(result.name);
        $("#sky").text(result.weather[0].description);
        $("#temp").text(farenheit);
        $("#wind").text(wind);
    }
})