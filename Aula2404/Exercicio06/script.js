function AdicionarTituloeParagrafo() {
    document.getElementById("div").innerHTML += "<h3>Novo Título</h3><p>Novo parágrafo adicionado via JavaScript!</p>";
}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("Adicionar").addEventListener("click",AdicionarTituloeParagrafo);
})

