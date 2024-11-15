let cantidadHombres = parseInt(prompt("Ingrese la cantidad de hombres en el grupo:"));
let cantidadMujeres = parseInt(prompt("Ingrese la cantidad de mujeres en el grupo:"));

if (isNaN(cantidadHombres) || isNaN(cantidadMujeres) || cantidadHombres < 0 || cantidadMujeres < 0) {
    alert("Por favor, ingrese cantidades válidas para hombres y mujeres.");
} else {
    let totalEstudiantes = cantidadHombres + cantidadMujeres;

    let porcentajeHombres = (cantidadHombres / totalEstudiantes) * 100;
    let porcentajeMujeres = (cantidadMujeres / totalEstudiantes) * 100;

    alert(`Porcentaje de hombres: ${porcentajeHombres.toFixed(2)}%`);
    alert(`Porcentaje de mujeres: ${porcentajeMujeres.toFixed(2)}%`);
}