let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

if (isNaN(radio) || radio <= 0) {
    alert("Por favor, ingrese un radio válido (mayor que cero).");
} else {
    let area = Math.PI * Math.pow(radio, 2);  
    let longitud = 2 * Math.PI * radio;       

    alert(`El área del círculo es: ${area.toFixed(2)}`);
    alert(`La longitud de la circunferencia es: ${longitud.toFixed(2)}`);
}