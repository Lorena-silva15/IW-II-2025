function mostrarHora() {
  const agora = new Date();
  document.getElementById('hora').textContent = agora.toLocaleTimeString();
}
