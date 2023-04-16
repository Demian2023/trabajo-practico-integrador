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
    } else {
        let nombreUsuario = $("#nombre").val();
        let apellidoUsuario = $("#apellido").val();
        let emailUsuario = $("#email").val();
        $("#nombre-completo-usuario").text(nombreUsuario + " " + apellidoUsuario);
        $("#email-pedido").text("Enviaremos los detalles al siguiente email: " + emailUsuario);
        $("#formulario").hide();
        $("#formulario-paso2").show();
    }
});

$("#formulario-paso2").validate({
    rules: {
        "checkbox[]": {
            required: true,
            minlength: 1
        }
    },
    messages: {
        "checkbox[]": "Debe seleccionar al menos una opción"
    }
});


$("#validar-paso2").click(function() {
    if ($("#formulario-paso2").valid() == false) {
        return;
    } else {
        let pedido = [];
        if ($("#opcion1").is(":checked")) {
            pedido.push($("#opcion1").val());
        };
        if ($("#opcion2").is(":checked")) {
            pedido.push($("#opcion2").val());
        };
        if ($("#opcion3").is(":checked")) {
            pedido.push($("#opcion3").val());
        };
        let pedidoString = pedido.join(", ") + ".";
        $("#pedido").text(pedidoString);

        if ($("#comentarios").val() !== "") {
            $("#consulta").html("Tu consulta: " + $("#comentarios").val() + ", será respondida en el mismo mail. <br> Gracias por elegirnos.");
        }

        $("#formulario-paso2").hide();
        $("#formulario-paso3").show();
    }
});

$("#volver-paso2").click(function() {
    $("#formulario-paso2").hide();
    $("#formulario").show();
});

$("#volver-paso3").click(function() {
    $("#formulario-paso3").hide();
    $("#formulario-paso2").show();
});

$("#boton-pdf").click(function() {
    const doc = new jsPDF();

    let elementHTML = $('#paraPDF').html();
    let specialElementHandlers = {
        '#elementH': function(element, renderer) {
            return true;
        }
    };
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save();
});