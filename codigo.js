$(document).ready(function() {
    $.ajax({
            method: "GET",
            url: "https://api.open-meteo.com/v1/forecast?latitude=-33.75&longitude=-61.97&hourly=temperature_2m&current_weather=true&forecast_days=1&timezone=America%2FChicago",
        })
        .done(function(mensaje) {
            $("#temperatura").append(mensaje.current_weather.temperature);
        })
});

$("#formulario").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            required: true,
            email: true,
        },
        messages: {
    'nombre.required': 'Por favor, introduce tu nombre',
    'apellido.required': 'Por favor, introduce tu apellido',
    'email.required': 'Por favor, introduce tu dirección de correo electrónico',
    'email.email': 'Por favor, introduce una dirección de correo electrónico válida'
  }
}
});



function validar(){
    if($("#formulario").valid() == false){
        return;
    }
