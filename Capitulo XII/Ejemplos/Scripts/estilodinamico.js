function iniciar() {
    var colorEntrada = prompt("Escriba el nombre de un color para el " + "fondo de esta página", "");
    document.body.setAttribute("style", "background-color: " + colorEntrada);
}
window.addEventListener("load", iniciar, false);