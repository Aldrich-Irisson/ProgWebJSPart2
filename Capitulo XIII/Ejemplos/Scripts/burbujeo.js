function clicDocumento() {
    alert("Hizo clic en el documento.");
}
function burbujeo(e) {
    alert("Esto va a burbujear.");
    e.cancelBubble = false;
}
function sinBurbujeo(e) {
    alert("Esto no va a burbujear.");
    e.cancelBubble = true;
}
function registrarEventos() {
    document.addEventListener("click", clicDocumento, false);
    document.getElementById("burbujeo").addEventListener("click", burbujeo, false);
    document.getElementById("sinburbujeo").addEventListener("click", sinBurbujeo, false);
}
window.addEventListener("load", registrarEventos, false);