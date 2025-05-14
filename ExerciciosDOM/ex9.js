function mostrarImagem() {
  const file = document.getElementById('upload').files[0];
  const preview = document.getElementById('preview');
  if (file) {
    const reader = new FileReader();
    reader.onload = () => preview.src = reader.result;
    reader.readAsDataURL(file);
  }
}
