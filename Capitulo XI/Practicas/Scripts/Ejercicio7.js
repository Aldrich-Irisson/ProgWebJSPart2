let articulo = ["el", "un", "algún", "ningún"];
let sustantivo = ["niño", "niña", "perro", "ciudad", "auto"];
let verbo = ["manejá", "saltó", "corrió", "caminó", "omitió"];
let preposicion = ["a", "desde", "encima de", "debajo de", "sobre"];
let resultados;

function iniciar() {
    resultados = document.getElementById("resultados");
    inicioHistoria();
}

function inicioHistoria() {
    resultados.innerHTML = "Había una vez...\n";
    for (var i = 0; i < 20; i++) {
        resultados.innerHTML += colocarArticulo() + " ";
        resultados.innerHTML += colocarSustantivo() + " ";
        resultados.innerHTML += colocarVerbo() + " ";
        resultados.innerHTML += colocarPreposicion() + " ";
        resultados.innerHTML += colocarArticulo() + " ";
        resultados.innerHTML += colocarSustantivo() + " ";
    }
    resultados.innerHTML += "\nFIN.";
}

function colocarArticulo() {
    var posicion = Math.floor(Math.random() * 4);
    return articulo[posicion];
}

function colocarSustantivo() {
    var posicion = Math.floor(Math.random() * 5);
    return sustantivo[posicion];
}

function colocarVerbo() {
    var posicion = Math.floor(Math.random() * 5);
    return verbo[posicion];
}

function colocarPreposicion() {
    var posicion = Math.floor(Math.random() * 5);
    return preposicion[posicion];
}

window.addEventListener("load", iniciar, false);