$(document).ready(function() {
    $.ajax({
            method: "GET",
            url: "https://api.open-meteo.com/v1/forecast?latitude=-33.75&longitude=-61.97&hourly=temperature_2m&current_weather=true&forecast_days=1&timezone=America%2FChicago",
        })
        .done(function(mensaje) {
            $("#temperatura").append(mensaje.current_weather.temperature);
        })

    function validar() {

    }
});