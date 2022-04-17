/*Desarrollar una calculadora de factoriales para números introducidos por teclado.
El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir, para
N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120*/

console.clear();
const prompt = require("prompt-sync")();

let numero = Number(prompt(`Introduce un número: `));
factorial (numero);
console.log(`El factorial de ${numero}`)