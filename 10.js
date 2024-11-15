let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa números válidos.");
} else {
    let resultado;

    if (num1 === num2) {
        resultado = num1 * num2;
        alert(`Los números son iguales. Resultado de la multiplicación: ${resultado}`);
    } else if (num1 > num2) {
        resultado = num1 - num2;
        alert(`El primer número es mayor. Resultado de la resta: ${resultado}`);
    } else {
        resultado = num1 + num2;
        alert(`El primer número es menor. Resultado de la suma: ${resultado}`);
    }
}