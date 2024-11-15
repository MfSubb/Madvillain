var contraseña, pase=0;
const contraseña_verdadera="34";
let frase;

do{
contraseña = prompt("Ingrese su contraseña");
if (contraseña==contraseña_verdadera) {
pase=pase+1;
frase='Contraseña correcta.'
document.write('<div style="text-align: center; font-size: 30px; color: white;">'+frase+'</div>');
}
else
{
alert("Contraseña incorrecta, intente de nuevo. ");
}
}
while(pase==0);