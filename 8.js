let calificacion1 = parseFloat(prompt("Ingrese la primera calificación:"));
let calificacion2 = parseFloat(prompt("Ingrese la segunda calificación:"));
let calificacion3 = parseFloat(prompt("Ingrese la tercera calificación:"));

if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3)) {
    alert("Por favor, ingrese calificaciones válidas.");
} else {
    let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    if (promedio >= 70) {
        alert(`El alumno aprueba con un promedio de ${promedio.toFixed(2)}`);
    } else {
        alert(`El alumno reprueba con un promedio de ${promedio.toFixed(2)}`);
    }
}