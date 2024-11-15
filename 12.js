let kilos = parseFloat(prompt("Ingrese la cantidad de kilos de manzanas que desea comprar:"));

if (isNaN(kilos) || kilos <= 0) {
    alert("Por favor, ingrese un valor válido de kilos.");
} else {
    let precioPorKilo = 100; 

    let descuento;
    if (kilos <= 2) {
        descuento = 0;
    } else if (kilos <= 5) {
        descuento = 10;
    } else if (kilos <= 10) {
        descuento = 15;
    } else {
        descuento = 20;
    }

    let totalSinDescuento = kilos * precioPorKilo;

    let montoDescuento = (totalSinDescuento * descuento) / 100;

    let totalAPagar = totalSinDescuento - montoDescuento;

    alert(`Total a pagar por ${kilos} kilos de manzanas:\nDescuento: ${descuento}%\nMonto con descuento: ${totalAPagar.toFixed(2)}`);
}