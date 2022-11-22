var segundos = 0;
function iniciarTemporizador() {
    window.setInterval("actualizarTiempo()", 1000);
}
function actualizarTiempo() {
    ++segundos;
    document.getElementById("hastaAhora").innerHTML = segundos;
}
window.addEventListener("load", iniciarTemporizador, false);