function validar() {
  const campo = document.getElementById('obrigatorio');
  if (campo.value.trim() === '') {
    alert('Este campo é obrigatório!');
  }
}
