let cantidadA = parseInt(prompt("Ingrese la cantidad de cuestionarios tipo A:"));
let cantidadB = parseInt(prompt("Ingrese la cantidad de cuestionarios tipo B:"));
let cantidadC = parseInt(prompt("Ingrese la cantidad de cuestionarios tipo C:"));

if (isNaN(cantidadA) || isNaN(cantidadB) || isNaN(cantidadC) || cantidadA < 0 || cantidadB < 0 || cantidadC < 0) {
    alert("Por favor, ingrese cantidades válidas para cada tipo de cuestionario.");
} else {
    let tiempoA = cantidadA * 5; 
    let tiempoB = cantidadB * 8; 
    let tiempoC = cantidadC * 6; 

    let tiempoTotalMinutos = tiempoA + tiempoB + tiempoC;

    let horas = Math.floor(tiempoTotalMinutos / 60);
    let minutos = tiempoTotalMinutos % 60;

    alert(`El tiempo total para revisar todas las evaluaciones es de ${horas} horas y ${minutos} minutos.`);
}