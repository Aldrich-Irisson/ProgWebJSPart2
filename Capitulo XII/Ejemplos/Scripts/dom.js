var nodoActual;
var cuentaid = 0;
function iniciar() {
    document.getElementById("botonPorId").addEventListener("click", porId, false);
    document.getElementById("botonInsertar").addEventListener("click", insertar, false);
    document.getElementById("botonAdjuntar").addEventListener("click", adejuntarNodo, false);
    document.getElementById("botonReemplazar").addEventListener("click", reemplazarActual, false);
    document.getElementById("botonEliminar").addEventListener("click", eliminar, false);
    document.getElementById("botonPadre").addEventListener("click", padre, false);
    nodoActual = document.getElementById("encabezadogrande");
}
window.addEventListener("load", iniciar, false);
function porId() {
    var id = document.getElementById("gbi").nodeValue;
    var destino = document.getElementById(id);
    if (destino)
        cambiarA(destino);
}
function insertar() {
    var nuevoNodo = crearNuevoNodo(document.getElementById("ins").value);
    nodoActual.parentNode.insertBefore(nuevoNodo, nodoActual);
    cambiarA(nuevoNodo);
}
function adejuntarNodo() {
    var nuevoNodo = crearNuevoNodo(document.getElementById("adjuntar").value);
    nodoActual.appendChild(nuevoNodo);
    cambiarA(nuevoNodo);
}
function reemplazarActual() {
    var nuevoNodo = crearNuevoNodo(document.getElementById("reemplazar").value);
    nodoActual.parentNode.replaceChild(nuevoNodo, nodoActual);
    cambiarA(nuevoNodo);
}
function eliminar() {
    if (nodoActual.parentNode == document.body)
        alert("No se puede eliminar un elemento de nivel superior.");
    else {
        var nodoAnterior = nodoActual;
        cambiarA(nodoAnterior.parentNode);
        nodoActual.removeChild(nodoAnterior);
    }
}
function padre() {
    var destino = nodoActual.parentNode;
    if (destino != document.body)
        cambiarA(destino);
    else
        alert("No hay padre.");
}
function crearNuevoNodo(texto) {
    var nuevoNodo = document.createElement("p");
    idNodo = "nuevo" + cuentaid;
    ++cuentaid;
    nuevoNodo.setAttribute("id", idNodo);
    texto = "[" + idNodo + "] " + texto;
    nuevoNodo.appendChild(document.createTextNode(texto));
    return nuevoNodo;
}
function cambiarA(nuevoNodo) {
    nodoActual.setAttribute("class", "");
    nodoActual = nuevoNodo;
    nodoActual.setAttribute("class", "highlighted");
    document.getElementById("gbi").value = nodoActual.getAttribute("id");
}