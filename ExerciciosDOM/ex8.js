function gerarCor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function gerarQuadrados() {
  const container = document.getElementById('container');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.className = 'quadrado';
    div.style.backgroundColor = gerarCor();
    container.appendChild(div);
  }
}
