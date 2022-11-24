function iniciar() {
    var boton = document.getElementById("comparar");
    boton.addEventListener("click", compararObjetos, false);
}

function compararObjetos() {
    let objeto1 =  campoObjeto1.value;
    let objeto2 =  campoObjeto2.value;
    if (objeto1.length == objeto2.length)
        resultado.innerHTML = "La primera cadena '"+ objeto1 + "' es igual a la seguna cadena '" + objeto2 + "'";
    else if (objeto1.length > objeto2.length)
        resultado.innerHTML = "La primera cadena '"+ objeto1 + "' es mayor a la seguna cadena '" + objeto2 + "'";
    else
        resultado.innerHTML = "La primera cadena '"+ objeto1 + "' es menor a la seguna cadena '" + objeto2 + "'";
}

window.addEventListener("load", iniciar, false);