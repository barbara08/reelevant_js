/*Algoritmo que lea un número entero (altura) y a partir de él cree una escalera invertida de
asteriscos con esa altura. Deberá quedar así, si ponemos una altura de 5.
*****
****
***
**
*
*/
// OTRA FORMA DE ABEL  OK
console.clear();
const prompt = require("prompt-sync")();
let number = Number(prompt("Introduzca el número: "));
for(let i=0;i<number;i++){
    console.log(imprimirBlancos(i) + imprimirAsteriscos(i,number));
}
function imprimirBlancos(numero){
    let linea="";
    for(j=0;j<numero;j++){
        linea = linea + " ";
    }
    return linea;
}
function imprimirAsteriscos(actual, max){
    let linea = "";
    for(let i=0; i < max-actual; i++){
        linea = linea + "*";
    }
    return linea;
}

// OTRA FORMA PROFE OK
const prompt = require("prompt-sync")();
let maximo = Number(prompt(`Introduce el número :`));
for (let linea=0; linea<maximo;linea++) {
    console.log(imprimir(linea," ")+imprimir(maximo-linea,"*"));
}
function imprimir (cantidad,caracter) {
    let linea = "";
    for (let i=0; i<cantidad; i++) {
        linea += caracter;
    }
    return linea;
}




