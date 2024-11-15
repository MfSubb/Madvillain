let N = parseInt(prompt("Ingresa el valor de N:"));

if (isNaN(N) || N <= 0) {
    alert("Por favor, ingresa un número entero positivo.");
} else {

    let suma = 0;

    for (let i = 1; i <= N; i++) {
        suma += i;
    }

    alert(`La suma de los primeros ${N} números enteros es: ${suma}`);
}

