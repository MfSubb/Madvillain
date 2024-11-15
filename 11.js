let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingresa tres números válidos.");
} else {
    let mayor;
    
    if (num1 > num2 && num1 > num3) {
        mayor = num1;
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    alert(`El número mayor de los tres es: ${mayor}`);
}