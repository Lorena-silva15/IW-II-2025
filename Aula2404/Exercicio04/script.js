function nome(){
    let nome = document.getElementById("atv4").value; alert("Nome digitado: " + nome);
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("atv4").addEventListener("click", nome);
});