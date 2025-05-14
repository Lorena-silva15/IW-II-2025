function mover(botao, direcao) {
  const item = botao.parentElement;
  const lista = item.parentElement;
  const index = Array.from(lista.children).indexOf(item);
  const novoIndex = index + direcao;

  if (novoIndex >= 0 && novoIndex < lista.children.length) {
    lista.insertBefore(item, lista.children[novoIndex + (direcao > 0 ? 1 : 0)]);
  }
}
