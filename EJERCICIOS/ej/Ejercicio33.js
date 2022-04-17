//Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado.
//Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda.

console.clear();
const prompt = require("prompt-sync")();
let numeroEntero = [];

for(let i = 0; i<3; i++){
    let number = Number(prompt("Introduzca un número: "));
    let nuevaLongitud = numeroEntero.push(number);
}
for(let j=0; j<numeroEntero.length; j++) {
    console.log(j, ":", numeroEntero[j]);
  }