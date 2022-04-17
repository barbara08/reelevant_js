/*
Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
array deberá tener los valores [5,4,3,2,1].
*/

console.clear();
const prompt = require("prompt-sync")();
/*
const arrayNumber = [1,2,3,4,5];
console.log(arrayNumber);
const arrayNumberReverse = arrayNumber.reverse();
console.log(arrayNumberReverse);
*/


//OTRA FORMA DE HACERLO
const arrayCinco = [1,2,3,4,5];
let nuevoArray = [];

for(let i = arrayCinco.length - 1; i>=0; i++) {
    nuevoArray[nuevoArray.length -i -1]=arrayCinco[i];
}
console.log(nuevoArray);










/*
const arreglo = [1,2,3,4,5];
let longitudDeArreglo = arreglo.length;
let indiceContrario=[];
for (let i = 0; i < longitudDeArreglo; i++) {
    // Guardar el actual
    temporal = arreglo[i];
    // El índice de la otra mitad
    indiceContrario = longitudDeArreglo - i - 1;
    // El valor actual es el valor contrario, el de la otra mitad
  //  arreglo[i] = arreglo[indiceContrario];
    // Y el de la otra mitad, es el que había en el actual originalmente
    arreglo[indiceContrario] = temporal;
  }
  // El arreglo ya está invertido internamente
console.log(indiceContrario);

*/