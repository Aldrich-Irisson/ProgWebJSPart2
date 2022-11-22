function crearLienzo() {
    var lado = 100;
    var tbody = document.getElementById("cuerpotabla");

    for (var i = 0; i < lado; ++i) {
        var fila = document.createElement("tr");
        for (var j = 0; j < lado; ++j) {
            var celda = document.createElement("td");
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }
    document.getElementById("lienzo").addEventListener("mousemove", procesarMouseMove, false);
}

function procesarMouseMove(e) {
    if (e.target.tagName.toLowerCase() == "td") {
        if (e.ctrlKey) {
            e.target.setAttribute("class", "blue");
        }

        if (e.shiftKey) {
            e.target.setAttribute("class", "red");
        }
    }
}

window.addEventListener("load", crearLienzo, false);