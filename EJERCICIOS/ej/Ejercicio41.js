/*Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
a) Obtenga cuántos números son mayores que 0.
b) Calcule el promedio de los números positivos.
c) Obtenga el promedio de todos los números.
*/

console.clear();
const prompt = require("prompt-sync")();

let arrayNumeroEnteros = [];
let numberUsuario = Number(prompt("Introduzca un número: "));
let newArray = [];
for(i=0; i<numberUsuario; i++){
    let randomNumber = Math.floor(Math.random() * numberUsuario);  
    arrayNumeroEnteros.push(randomNumber);
}
console.log("Array a comprobar: ", arrayNumeroEnteros);

// a) Obtenga cuántos números son mayores que 0.
function mayorDe0(OtroArray) {
    let cantidadMayor0 = 0;
    let longitud = OtroArray.length;
    for(i = 0; i < longitud; i++){
        if(OtroArray[i] > 0){
            cantidadMayor0++;    // cantidadMayor0 = cantidadMayor0 + 1; // cantidadMayor0 +=1;
        }
    }
    return cantidadMayor0;
}
let cantidad = mayorDe0(arrayNumeroEnteros);
console.log("La cantidad de números mayor de 0 son: ", cantidad);

// b) Calcule el promedio de los números positivos.
    // calcular los positivos del array  arrayNumeroEnteros 
    // guardar en otro array solo los positivos en  arrayPositivos
    // usar función promedio para que calcule el promedio del arrayPositivos
arrayPositivos = [];

for(i = 0; i< arrayNumeroEnteros.length; i++){
    if(arrayNumeroEnteros[i] > 0){
        arrayPositivos.push(arrayNumeroEnteros[i]);
    }
}
console.log("Array de números positivos a comprobar: ", arrayPositivos);
console.log("El promedio de todos los números positivos son: ", promedioArrayEnteros(arrayPositivos));


// c) Obtenga el promedio de todos los números.
function promedioArrayEnteros(cualquierArray){
    let tamanioarray = cualquierArray.length;
    let sum = 0;
    for(i=0; i<tamanioarray; i++){
        sum = sum + cualquierArray[i];   // sum += cualquierArray[i];
    }
    return sum / tamanioarray;
}
let promedio = promedioArrayEnteros(arrayNumeroEnteros);
console.log("El promedio de todos los números son: ", promedio);




