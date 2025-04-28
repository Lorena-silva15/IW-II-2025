function mostrarMensagem(){
    alert( "JavaScript é Divertido!!");

}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("atv1").addEventListener("click",mostrarMensagem);
})