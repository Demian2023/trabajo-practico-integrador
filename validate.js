
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
        required: "Por favor, ingrese su nombre",
        minlength: "El nombre debe tener al menos 2 caracteres",
        maxlength: "El nombre no debe tener más de 50 caracteres",
        pattern: "Por favor, ingrese un nombre válido",
      },
     apellido: {
        required: "Por favor, ingrese su apellido",
        minlength: "El nombre debe tener al menos 2 caracteres",
        maxlength: "El nombre no debe tener más de 50 caracteres",
        pattern: "Por favor, ingrese un apellido válido",
      },
     email: {
       required: "Por favor, ingrese su mail",
       email: "Ingrese el formato correcto de mail",
    },
});


$("#validar").click(function() {
    if($("#formulario").valid() == false){
        return;
    }
});
 
