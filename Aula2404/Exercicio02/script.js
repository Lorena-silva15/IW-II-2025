function mudarTexto(){
    document.getElementById("texto").innerText = "Texto atualizado com JavaScript!";
    }
    
    
    
    
    document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("ex2").addEventListener("click",mudarTexto);
    });