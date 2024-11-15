let montoCompra = parseFloat(prompt("Ingrese el monto de su compra:"));

if (isNaN(montoCompra) || montoCompra <= 0) {
    alert("Por favor, ingrese un monto válido.");
} else {
    let totalAPagar;

    if (montoCompra > 100) {
        totalAPagar = montoCompra * 0.8; 
        alert(`Su compra supera los $100. Total con descuento: $${totalAPagar.toFixed(2)}`);
    } else {
        totalAPagar = montoCompra;
        alert(`Su compra no supera los $100. Total a pagar: $${totalAPagar.toFixed(2)}`);
    }
}