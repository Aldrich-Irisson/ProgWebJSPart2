let boton;
let exp = /^[(]?[0-9]{3}[)][0-9]{3}-[0-9]{4}/;
function iniciar() {
    boton = document.getElementById("separar");
    boton.addEventListener("click", validar, false);
}

function validar() {
    campoArea.innerHTML = "";
    campoNumero.innerHTML = "";
    if (exp.test(campoTelefono.value))
        separar();
}

function separar() {
    let temp = campoTelefono.value;
    campoArea.innerHTML = "Área: " + temp.substring(1, 4) + "<br>";
    let numero = temp.substring(5, 13) + "";
    numero = numero.split("-", 8);
    campoNumero.innerHTML += "Número telefónico: " + numero[0] + numero[1];
}

window.addEventListener("load", iniciar, false);