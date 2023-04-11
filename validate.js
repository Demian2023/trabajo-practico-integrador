
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
    'nombre.required': 'Por favor, introduce tu nombre',
    'apellido.required': 'Por favor, introduce tu apellido',
    'email.required': 'Por favor, introduce tu dirección de correo electrónico',
    'email.email': 'Por favor, introduce una dirección de correo electrónico válida'
  }
});


$("#validar").click(function() {
    if($("#formulario").valid() == false){
        return;
    };
 
