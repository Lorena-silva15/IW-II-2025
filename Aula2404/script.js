function saudacao(){
    alert("Olá bem-vindo a aula!");
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
});