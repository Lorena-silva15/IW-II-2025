function validarCampo() {
  const campo = document.getElementById('campo');
  campo.classList.toggle('invalido', campo.value.length < 5);
}

