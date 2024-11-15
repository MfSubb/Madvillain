let horas = parseInt(prompt("Ingrese el número de horas:"));
let minutos = parseInt(prompt("Ingrese el número de minutos:"));
let segundos = parseInt(prompt("Ingrese el número de segundos:"));

if (isNaN(horas) || horas < 0 || isNaN(minutos) || minutos < 0 || isNaN(segundos) || segundos < 0) {
    alert("Por favor, ingrese valores válidos para horas, minutos y segundos.");
} else {
    let totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

    alert(`El total de segundos es: ${totalSegundos}`);
}