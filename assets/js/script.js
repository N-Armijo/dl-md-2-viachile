//Js propio
let formContacto = document.getElementById("form-contacto");
let enviarFormulario = document.getElementById("btn-contacto");
enviarFormulario.addEventListener('click', function(event) {
    event.preventDefault();
    alert("El mensaje fue enviado correctamente.");
    formContacto.reset();
})

