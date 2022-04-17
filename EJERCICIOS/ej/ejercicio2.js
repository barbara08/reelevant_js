
//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.
const prompt = require("prompt-sync")();
let number1 = Number(prompt("introduce un número: ")); 
let number2 = Number(prompt("introduce el segundo número: "));
console.log(`El numero uno es ${number1}`);

let suma = number1 + number2;
let resta = number1 - number2;
let producto = number1 * number2;
let division = number1 / number2;

console.log("La suma es: " + suma); 
console.log("La resta es: " + resta);
console.log("El producto es: " + producto);
console.log("La division es: " + division);
console.log("La suma es: ", suma);  // otra forma de hacerlo  
console.log(`La suma de los numeros son: ${suma}`);  // otra forma de hacerlo
console.log(`La suma de los numeros son: ${suma}, La resta de los numeros son: ${resta}`); // otra forma de hacerlo
 