
//EJERCICIO1

//dadas 2 variables numericas A y B, que el usuario debe teclear,
//se pide realizar un algoritmo que intercambie los valores de ambas
//variables y muestre cuanto valen al final cada una de ellas (recuerda la asignacion)
//libreria prompt-sync  no se instala  el comando es:   npm i prompt-sync  no encuentra nmp

const prompt = require("prompt-sync")();

//prompt para pedir datos al usuario por la consola
//con "Number()" delante de la const (en este caso prompt) lo que hace es cambiar string por numero
let number1 = Number(prompt("introduce un número: ")); 
let number2 = Number(prompt("introduce el segundo número: "));

console.log(typeof number1);  // typeof se dice el tipo que es number pero no el valor
console.log(typeof number2);

//cambiar el valor de las variables si number1 es 8 y number2 es 3 
//cambirar a number1 es 3 y number2 es 8
//habría que crear otra variable para guardar el numero y no se pierda
let aux = number1;
number1 = number2;
number2 = aux;
console.log("El nuevo valor de número1 es: "+ number1);
console.log("El nuevo valor de número2 es: "+ number2);






   


