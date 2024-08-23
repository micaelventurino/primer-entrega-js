

// Bucle para repetir el proceso hasta obtener una edad válida

let edadValida = false; // Variable para controlar el bucle

while (!edadValida) {
    // Solicitar la edad al usuario
    let edad = parseInt(prompt("Ingresa tu edad:"));

    // Validar si la entrada es un número y si es válida
    if (edad > 0) {
        // Edad válida
        let anoNacimiento = calcularAnoNacimiento(edad);
        alert("Naciste en el año " + anoNacimiento + ".");
        edadValida = true; // Salir del bucle
    } else {
        // Edad inválida
        alert("Por favor, introduce una edad válida.");
    }
}

function calcularAnoNacimiento(edad) {
    let anoActual = 2024; // Año actual
    let anoNacimiento = anoActual - edad; // Cálculo del año de nacimiento
    return anoNacimiento;
}