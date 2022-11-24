function iniciar(){
    let boton = document.getElementById("traducir");
    boton.addEventListener("click", traducir, false);
}

function traducir(){
    resultado.innerHTML = "";
    let texto = (campoTexto.value).split(" ");
    for(let palabra in texto){
        texto[palabra] = texto[palabra].substring(1, (texto[palabra].length + 1) ) + texto[palabra][0] + "ae";
        imprimirPalabraEnLatin(texto[palabra]);
    }
}

function imprimirPalabraEnLatin(palabra){
    resultado.innerHTML += palabra + "  ";
}

window.addEventListener("load", iniciar, false);