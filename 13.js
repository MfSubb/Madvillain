let opcion;

do {
    opcion = parseInt(prompt("Seleccione una opción:\n1: Suma\n2: Resta\n3: Multiplicación\n4: Salir"));

    if (isNaN(opcion) || opcion < 1 || opcion > 4) {
        alert("Por favor, elige una opción válida (1 a 4).");
        continue;
    }

    if (opcion === 4) {
        alert("Saliendo del programa.");
        break;
    }

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        continue;
    }

    let resultado;
    switch (opcion) {
        case 1:
            resultado = num1 + num2;
            alert(`La suma de ${num1} y ${num2} es: ${resultado}`);
            break;
        case 2:
            resultado = num1 - num2;
            alert(`La resta de ${num1} y ${num2} es: ${resultado}`);
            break;
        case 3:
            resultado = num1 * num2;
            alert(`La multiplicación de ${num1} y ${num2} es: ${resultado}`);
            break;
    }
} while (opcion !== 4);