var numero=1, numero_total=0, frase;

do{
numero = parseFloat(prompt("Ingrese un numero mayor a cero. Si ingresa cero el bucle termina."));
numero_total=numero_total+numero;
}
while(numero>0);

frase='Ingreso el numero 0. El bucle termino, sumando los numeros que puso en el bucle da un total de '+numero_total;
document.write('<div style="text-align: center; font-size: 30px; color: white;">'+frase+'</div>');