let rangos = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function iniciar() {
    var botonCalcular = document.getElementById("botonCalcular");
    var campoVenta = document.getElementById("campoVenta");

    var resultado = document.getElementById("resultado");
    var campoRangos = document.getElementById("campoRangos");

    botonCalcular.addEventListener("click", calcularComision, false);
}

function calcularComision() {
    var ventaBruta = parseInt(campoVenta.value);
    var comision = 200 + (ventaBruta * 0.09);
    campoRangos.innerHTML = "";
    guardarDatos(comision);
    imprimirDatos(comision);
}

function guardarDatos(valor) {
    switch (true) {
        case valor >= 200 && valor < 300: {
            rangos[0]++;
            break;
        }

        case valor >= 300 && valor < 400: {
            rangos[1]++;
            break;
        }

        case valor >= 400 && valor < 500: {
            rangos[2]++;
            break;
        }

        case valor >= 500 && valor < 600: {
            rangos[3]++;
            break;
        }

        case valor >= 600 && valor < 700: {
            rangos[4]++;
            break;
        }

        case valor >= 700 && valor < 800: {
            rangos[5]++;
            break;
        }

        case valor >= 800 && valor < 900: {
            rangos[6]++;
            break;
        }

        case valor >= 900 && valor < 1000: {
            rangos[7]++;
            break;
        }

        case valor >= 1000: {
            rangos[8]++;
            break;
        }

    }
}

function imprimirDatos(valor) {
    resultado.innerHTML = "Salario: " + valor;
    for (var r in rangos) {
        campoRangos.innerHTML += "Rango " + (parseInt(r) + 1) + "): " + rangos[r] + "<br>";
    }
}

window.addEventListener("load", iniciar, false);