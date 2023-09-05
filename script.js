alert("Bienvenidos al restaurante");
var num1 = parseInt(prompt("Ingrese el costo de la entrada "));
var num2 = parseInt(prompt("Ingrese el costo del plato fuerte "));
var num3 = parseInt(prompt("Ingrese el costo de la bebida "));
var num4 = parseInt(prompt("Ingrese el costo del postre "));
alert("Presione F12 para abrir la consola");
// SUMA
console.log("El costo de la entrada es: "+num1);
console.log("El costo del plato fuerte es: "+num2);
console.log("El costo de la bebida es: "+num3);
console.log("El costo del postre: "+num4);

var suma= num1 + num2+ num3+ num4;
console.log("El costo total es: "+suma);

//IGV
var IGV =suma * 0.18;
console.log("El IGV es: "+IGV );

//IGV
var total= IGV + suma;
console.log("El costo total con IGV es: "+ total  );
alert("Gracias por comprar aqui");