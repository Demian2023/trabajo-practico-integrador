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
            maxlength: 30
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        nombre: {
            required: "Por favor, ingresa tu nombre",
            minlength: "El nombre debe tener al menos 2 caracteres",
            maxlength: "El nombre no debe tener más de 60 caracteres",
            pattern: "Por favor, ingrese un nombre válido",
        },
        apellido: {
            required: "Por favor, ingresa tu apellido",
            minlength: "El apellido debe tener al menos 2 caracteres",
            maxlength: "El apellido no debe tener más de 50 caracteres",
            pattern: "Por favor, ingrese un apellido válido",
        },
        email: {
            required: "Por favor, ingresa tu mail",
            email: "Ingrese el formato correcto de mail",
        }
    },
});


$("#validar").click(function() {
    if ($("#formulario").valid() == false) {
        return;
    }
});