var opcion=0, salida=0;
let frase;

do{
opcion = parseFloat(prompt("Bienvenido a este menú, tiene 3 opciones: 1-Menú 2-Configuraciones 3-Salir"));
switch(opcion){
case 1:
    alert("Este es el menú. ");
break;
case 2:
    alert("Esta es la configuracion. ");
break;
case 3:
    salida=salida+1;
break;
}
}
while(salida==0);

frase='Usted eligio salir, hasta luego. ';
document.write('<div style="text-align: center; font-size: 30px; color: white;">'+frase+'</div>');