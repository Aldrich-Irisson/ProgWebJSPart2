var intervalo = null;
var velocidad = 6;
var cuenta = 0;
function ejecutar() {
    cuenta += velocidad;
    if (cuenta >= 375) {
        window.clearInterval(intervalo);
        intervalo = null;
    }
    var imagenGrande = document.getElementById("imgPortada");
    imagenGrande.setAttribute("style", "width: " + (0.7656 * cuenta + "px;") + "height: " + (cuenta + "px;"));
}
function mostrar(archimg) {
    if (intervalo)
        return;
    var imagenGrande = document.getElementById("imgPortada");
    imagenGrande.setAttribute("style", "width: 0px; height: 0px;");
    imagenGrande.setAttribute("src", "Img/" + archimg);
    imagenGrande.setAttribute("alt", "Versión grande de " + archimg);
    cuenta = 0;
    intervalo = window.setInterval("ejecutar()", 10);
}
function iniciar() {
    document.getElementById("jhtp").addEventListener("click", function () {
        mostrar("jhtp.jpg");
    }, false)
    document.getElementById("iw3htp").addEventListener("click", function () {
        mostrar("iw3htp.jpg");
    }, false)
    document.getElementById("cpphtp").addEventListener("click", function () {
        mostrar("cpphtp.jpg");
    }, false)
    document.getElementById("jhtplov").addEventListener("click", function () {
        mostrar("jhtplov.jpg");
    }, false)
    document.getElementById("cpphtplov").addEventListener("click", function () {
        mostrar("cpphtplov.jpg");
    }, false)
    document.getElementById("vcsharphtp").addEventListener("click", function () {
        mostrar("vcsharphtp.jpg");
    }, false)
}
window.addEventListener("load", iniciar, false);