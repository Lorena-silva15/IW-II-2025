function copiar() {
  const texto = document.getElementById('texto').textContent;
  navigator.clipboard.writeText(texto).then(() => alert('Copiado!'));
}
