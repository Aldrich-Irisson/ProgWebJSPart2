var arregloAyuda = ["Escriba su nombre en este cuadro de entrada.", "Escriba su dirección de e-mail en este cuadro de entrada.", "Marque esta casilla si le gustó nuestro sitio.", "Escriba aquí los comentarios para que nosotros los leamos.", "Este botón envía el formulario a la secuencia de comandos del lado del servidor.", "Este botón borra el formulario.", ""];
var textoAyuda;
function inic() {
    textoAyuda = document.getElementById("textoAyuda");
    registrarEscuchas(document.getElementById("nombre"), 0);
    registrarEscuchas(document.getElementById("email"), 1);
    registrarEscuchas(document.getElementById("gusta"), 2);
    registrarEscuchas(document.getElementById("comentarios"), 3);
    registrarEscuchas(document.getElementById("enviar"), 4);
    registrarEscuchas(document.getElementById("reiniciar"), 5);
    var miFormulario = document.getElementById("miFormulario");
    miFormulario.addEventListener("submit", function () {
        return confirm("¿Seguro que desea enviar el formulario?");
    }, false);
    miFormulario.addEventListener("reset", function () {
        return confirm("¿Seguro que desea reiniciar el formulario?");
    }, false);
}
function registrarEscuchas(objeto, numeroMensaje) {
    objeto.addEventListener("focus", function () {
        textoAyuda.innerHTML = arregloAyuda[numeroMensaje];
    }, false);
    objeto.addEventListener("blur", function () {
        textoAyuda.innerHTML = arregloAyuda[6];
    }, false);
}
window.addEventListener("load", inic, false);