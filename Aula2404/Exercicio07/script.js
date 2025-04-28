function mudarCorParagrafo() {
    document.getElementById("paragrafo").style.color = "red";
}


document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("mudarcor").addEventListener("click",mudarCorParagrafo);
})
