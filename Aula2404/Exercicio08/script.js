function contarCaracteres() {
    var texto = document.getElementById("campoTexto").value;
    document.getElementById("contador").innerText = "Caracteres: " + texto.length;
}