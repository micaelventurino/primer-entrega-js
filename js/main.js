let intentosFallidos = []; 
const intentosMaximos = 5; 
let intentos = 0; 
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
let nombreValido = false;

do {
    let nombreApellido = prompt("Ingresa tu nombre:");

    
    if (nombreApellido === null || nombreApellido.trim() === "") {
        alert("Por favor, introduce un nombre.");
    } else if (!regexNombre.test(nombreApellido)) {
        alert("El nombre solo puede contener letras y espacios. No se permiten números ni símbolos especiales.");
        intentosFallidos.push(nombreApellido);
    } else {
        alert("Hola " + nombreApellido + ". A continuación vamos a calcular tu año de nacimiento."); 
        nombreValido = true; 
        break;
    }

    intentos++;
    if (intentos < intentosMaximos) {
        alert("Te quedan " + (intentosMaximos - intentos) + " intentos.");
    } else {
        alert("Has agotado el número de intentos.");
    }

} while (intentos < intentosMaximos);

/* Este console.log lo puse para ver en consola el array con los intentos fallidos del usuario */ 
if (intentosFallidos.length > 0) {
    console.log(intentosFallidos);
}



if (nombreValido) {
    let edad;
    do {
        edad = parseFloat(prompt("Ingresa tu edad:"));
        if (isNaN(edad) || edad <= 0) {
            alert("Por favor, ingresa una edad válida mayor que 0.");
        }
    } while (isNaN(edad) || edad <= 0);


    const fechaActual = new Date();
    const fecha = {
        ano: fechaActual.getFullYear(),
        mes: fechaActual.getMonth() + 1, 
        dia: fechaActual.getDate()
    };


    function diasEnMes(mes, año) {
        return new Date(año, mes, 0).getDate();
    }


    function calcularAnoNacimiento(edad, fechaActual) {
        let anoNacimiento = fechaActual.ano - edad;
        let mesNacimiento, diaNacimiento;

        do {
            mesNacimiento = parseInt(prompt("Ingresa el mes de tu cumpleaños (1-12):"));
            diaNacimiento = parseInt(prompt("Ingresa el día de tu cumpleaños:"));
            
            if (mesNacimiento >= 1 && mesNacimiento <= 12 && diaNacimiento >= 1 && diaNacimiento <= diasEnMes(mesNacimiento, anoNacimiento)) {
                break;
            } else {
                alert("El mes o el día ingresado no son válidos. Por favor ingresa valores correctos.");
            }
        } while (true);

        /* Este if es para calcular si el cumpleaños del usuario aún no llegó este año*/
        if (fechaActual.mes < mesNacimiento || (fechaActual.mes === mesNacimiento && fechaActual.dia < diaNacimiento)) {
            anoNacimiento--; 
        }

        return anoNacimiento;
    }

    const anoNacimiento = calcularAnoNacimiento(edad, fecha);
    alert("Naciste en el año " + (anoNacimiento) + ".");
} 
else {
    alert("No pudimos procesar tu solicitud debido a los 5 intentos fallidos en el ingreso del nombre.");
}