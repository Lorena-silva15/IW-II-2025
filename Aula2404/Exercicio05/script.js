function mudarTexto(){
    document.getElementById("texto").innerText = " ";
    }
    
    
    
    
    document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("ex5").addEventListener("click",mudarTexto);
    });