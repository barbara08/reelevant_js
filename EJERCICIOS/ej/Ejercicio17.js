/*Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N
se leerá por teclado.*/

console.clear();
const prompt = require("prompt-sync")();
let N = Number(prompt(`Introduce un número: `));
resultado = 0;
for(contador = 1; contador <= N; contador++){
    resultado=resultado+contador;
}   
    console.log(`La suma de los N naturales son: `, resultado);

//suma=(N*N+1)/2
