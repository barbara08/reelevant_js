/*Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
junto con su índice y finalmente, la suma de todos los valores.*/

console.clear();
const prompt = require("prompt-sync")();

let number = Number(prompt("Introduzca un número: "));
let tamanioArray =[];
let aleatorio = [];

for(i=0; i<number; i++){
    aleatorio = Math.floor(Math.random() * 10);
    tamanioArray.push(aleatorio);
}
console.log(tamanioArray);
