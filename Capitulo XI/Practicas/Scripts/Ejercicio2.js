function iniciar() {
    var botonAhora = document.getElementById("botonAhora");
    var botonAyer = document.getElementById("botonAyer");
    var botonDiezAnios = document.getElementById("botonDiezAnios");
    var botonSemana = document.getElementById("botonSemana");
    botonAhora.addEventListener("click", ahora, false);
    botonAyer.addEventListener("click", ayer, false);
    botonDiezAnios.addEventListener("click", diezAnios, false);
    botonSemana.addEventListener("click", semana, false);
}

function ahora() {
    var fechaActual = new Date();
    fechaActual.setMonth(fechaActual.getMonth() + 1);
    var fecha = fechaActual.getDate() + "/" + fechaActual.getUTCMonth() + "/" + fechaActual.getFullYear();
    document.getElementById("alerta").innerHTML = "<p>Hora: " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

function ayer() {
    var fechaAyer = new Date();
    fechaAyer.setMonth(fechaAyer.getMonth() + 1);
    fechaAyer.setDate(fechaAyer.getDate() - 1);
    var fecha = fechaAyer.getDate() + "/" + fechaAyer.getMonth() + "/" + fechaAyer.getFullYear();
    document.getElementById("alerta").innerHTML = "<p>Hora: " + fechaAyer.getHours() + ":" + fechaAyer.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

function diezAnios() {
    var fechaDiezAnios = new Date();
    fechaDiezAnios.setMonth(fechaDiezAnios.getMonth() + 1);
    fechaDiezAnios.setFullYear(fechaDiezAnios.getFullYear() - 10, fechaDiezAnios.getMonth(), fechaDiezAnios.getDate());
    var fecha = fechaDiezAnios.getDate() + "/" + fechaDiezAnios.getMonth() + "/" + fechaDiezAnios.getFullYear();
    document.getElementById("alerta").innerHTML = "<p>Hora: " + fechaDiezAnios.getHours() + ":" + fechaDiezAnios.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

function semana() {
    var fechaSemana = new Date();
    fechaSemana.setMonth(fechaSemana.getMonth() + 1);
    fechaSemana.setDate(fechaSemana.getDate() - 7);
    var fecha = fechaSemana.getDate() + "/" + fechaSemana.getMonth() + "/" + fechaSemana.getFullYear();
    document.getElementById("alerta").innerHTML = "<p>Hora: " + fechaSemana.getHours() + ":" + fechaSemana.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

window.addEventListener("load", iniciar, false);