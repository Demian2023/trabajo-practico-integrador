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
    }
})



$("#enviar").click(function(){
    if($("#formulario").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let email = $("#email").val()

    console.log(nombre)
    console.log(apellido)
    console.log(email)
})