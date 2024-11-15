let montoCompra = parseFloat(prompt("Ingrese el monto total de su compra:"));

if (isNaN(montoCompra) || montoCompra <= 0) {
    alert("Por favor, ingrese un monto válido.");
} else {
    let descuento = montoCompra * 0.15;
    let totalAPagar = montoCompra - descuento;

    alert(`El total con un 15% de descuento es: $${totalAPagar.toFixed(2)}`);
}