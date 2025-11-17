function agregar(texto) {
    document.getElementById("resultado").innerHTML += "<p>" + texto + "</p>";
}


function clasificarPresion() {
    let sis = parseInt(prompt("Ingrese presión sistólica:"));
    let dia = parseInt(prompt("Ingrese presión diastólica:"));

    let resultado = "";

    if (sis < 120 && dia < 80) {
        resultado = "Normal";
    } else if (sis >= 120 && sis <= 129 && dia < 80) {
        resultado = "Elevada";
    } else if ((sis >= 130 && sis <= 139) || (dia >= 80 && dia <= 89)) {
        resultado = "HTA Grado 1";
    } else if (sis >= 140 || dia >= 90) {
        resultado = "HTA Grado 2";
    }

    agregar("Clasificación: <b>" + resultado + "</b>");
}


function promedioTemperaturas() {
    let n = parseInt(prompt("Ingrese número de pacientes:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let temp = parseFloat(prompt(`Temperatura del paciente ${i}:`));
        suma += temp;
    }

    agregar("Promedio de temperatura: <b>" + (suma / n).toFixed(2) + "</b>");
}


function contarFiebre() {
    let contador = 0;
    let temp = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));

    while (temp !== 0) {
        if (temp >= 38) contador++;
        temp = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    }

    agregar("Pacientes con fiebre: <b>" + contador + "</b>");
}


function triage() {
    let codigo = parseInt(prompt("Ingrese código de TRIAGE (1-4):"));
    let categoria = "";

    switch (codigo) {
        case 1: categoria = "Rojo (Emergencia)"; break;
        case 2: categoria = "Amarillo (Urgente)"; break;
        case 3: categoria = "Verde (No urgente)"; break;
        case 4: categoria = "Azul (Muy baja prioridad)"; break;
        default: categoria = "Código inválido";
    }

    agregar("Categoría TRIAGE: <b>" + categoria + "</b>");
}


function registrarSpO2() {
    let opcion;

    do {
        let spo2 = parseInt(prompt("Ingrese SpO2:"));
        agregar("SpO₂ registrado: " + spo2 + "%");

        opcion = prompt("¿Desea ingresar otra medición? (si/no)").toLowerCase();
    } while (opcion !== "no");

    agregar("Fin del registro de SpO2.");
}