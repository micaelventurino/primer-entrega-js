
let nombreApellido;

while (true) {
    nombreApellido = prompt("Ingresa tu nombre");

    if (nombreApellido === null || nombreApellido.trim() === "") {
        alert("Por favor, introduce un nombre.");
    } else {
        break;
    }
}

alert("Hola " + nombreApellido + ". A continuación vas a ingresar tu edad para calcular el año de nacimiento.");



let edadValida = false; 

while (!edadValida) {
    let edad = parseInt(prompt("Ingresa tu edad:"));

    if (edad > 0) {
        let anoNacimiento = calcularAnoNacimiento(edad);
        alert("Naciste en el año " + anoNacimiento + "... o quizá el año anterior :)");
        edadValida = true;
    } else {
        alert("Por favor, introduce una edad válida.");
    }
}

function calcularAnoNacimiento(edad) {
    let anoActual = 2024;
    let anoNacimiento = anoActual - edad;
    return anoNacimiento;
}