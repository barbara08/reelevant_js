/*Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. En
cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida por
pantalla:
Introduce el número 1º.
➢ 8
El cubo de 8 es 512.
Introduce el número 2º.*/

console.clear();
const prompt = require("prompt-sync")();

for(i=0; i<10; i++){
    let number = Number(prompt(`Introduce un número: `));
    console.log(`El cubo de ${number} es: `, number*number*number);  //number**3
    //console.log(`El cubo de ${number} es: ${i}`, number*number*number);
}
