function botonDividirPresionado() {
    var cadenaEntrada = document.getElementById("campoEntrada").value;
    var tokens = cadenaEntrada.split(" ");
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "<p>El enunciado dividido en palabras es: </p>" +
        "<p class = 'indent'>" + tokens.join("</p><p class = 'indent'>")
        + "</p>" + "<p>Los primeros 10 caracteres de la cadena de entrada son: </p>"
        + "<p class = 'indent'>'" + cadenaEntrada.substring(0, 10) + "'</p>";
}
function iniciar() {
    var botonDividir = document.getElementById("botonDividir");
    botonDividir.addEventListener("click", botonDividirPresionado, false);

}
window.addEventListener("load", iniciar, false);