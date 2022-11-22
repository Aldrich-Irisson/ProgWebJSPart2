var letras = "abcdefghijklmnopqrstuuvwxyzabcdefghijklm";
function botonPresionado() {
    var campoEntrada = document.getElementById("campoEntrada");
    document.getElementById("resultados").innerHTML = "<p>La primera ocurrencia se encuentra en el índice " + letras.indexOf(campoEntrada.value) + "</p>" + "<p>La última ocurrencia se encuentra en el índice" + letras.lastIndexOf(campoEntrada.value) + "</p>" + "<p>La primera ocurrencia del índice 12 se encuentra en el índice " + letras.indexOf(campoEntrada.value, 12) + "</p>" + "<p>La última ocurrencia del índice 12 se encuentra en el índice " + letras.lastIndexOf(campoEntrada.value, 12) + "</p>";
}
function iniciar() {
    var botonBuscar = document.getElementById("botonBuscar");
    botonBuscar.addEventListener("click", botonPresionado, false);
}
window.addEventListener("load", iniciar, false);