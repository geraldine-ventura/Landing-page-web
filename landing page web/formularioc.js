
const form = document.getElementById('contact-form');
form.addEventListener('submit', validarFormulario);

function validarFormulario(evento) {
  evento.preventDefault();

  // Validar el nombre
  const nombre = document.getElementById('nombre');
  if (nombre.value.trim() === '') {
    alert('Por favor ingrese su nombre.');
    nombre.focus();
    return false;
  }

  // Validar el correo electrónico
  const correo = document.getElementById('correo');
  const correoRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!correoRegex.test(correo.value)) {
    alert('Por favor ingrese un correo electrónico válido.');
    correo.focus();
    return false;
  }

  // Validar el mensaje
  const mensaje = document.getElementById('mensaje');
  if (mensaje.value.trim() === '') {
    alert('Por favor ingrese un mensaje.');
    mensaje.focus();
    return false;
  }

  // Si se pasa la validación, enviar el formulario
  form.submit();
}
