/*
Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud,
aquellos que sean pares y mayores que 25.

*/
console.clear();
const prompt = require("prompt-sync")();

let array25 = [];
let arrayNaturales = [];
const MAX = 20;

for(let i = 0; i<10; i++) {
    arrayNaturales[i] = Math.floor(Math.random() * 100);  // la i del for es la misma i del array
    if (arrayNaturales[i] %2 ===0 && arrayNaturales[i] >25) {
        array25[i] = arrayNaturales[i];
    } else {
        array25[i] = null;
    }
}
console.log (arrayNaturales);
console.log (array25);

