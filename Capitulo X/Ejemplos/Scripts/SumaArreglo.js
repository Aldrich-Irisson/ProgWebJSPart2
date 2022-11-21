function iniciar() {
    var elArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var total1 = 0, total2 = 0;

    var longitud = elArreglo.length;

    for (var i = 0; i < elArreglo.length; ++i) {
        total1 += elArreglo[i];
    }
    
    var resultados = "<p>Total usado índices: " + total1 + "</p>";
    
    for (var elemento in elArreglo) {
        total2 += elArreglo[elemento];
    }
    
    resultados += "<p>Total usando for...in: " + total2 + "</p>";
    document.getElementById("salida").innerHTML = resultados;
}

window.addEventListener("load", iniciar, false);