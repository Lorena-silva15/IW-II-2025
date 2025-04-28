function mudaCor(){
    document.body.style.backgroundColor = "blue";

}

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("atv3").addEventListener("click",mudaCor);
})