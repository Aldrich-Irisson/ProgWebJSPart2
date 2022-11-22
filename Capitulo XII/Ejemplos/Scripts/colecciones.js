function procesarVinculos() {
    var listaVinculos = document.links;
    var contenido = "<ul>";
    for (var i = 0; i < listaVinculos.length; ++i) {
        var vinculoActual = listaVinculos[i];
        contenido += "<li><a href='" + vinculoActual.href + "'>" + vinculoActual.innerHTML + "</li>";
    }
    contenido += "</ul>";
    document.getElementById("vinculos").innerHTML = contenido;
}
window.addEventListener("load", procesarVinculos, false);