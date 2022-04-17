//Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
//Pista: para determinar el resto de una división, se usa la operación módulo %.
//En este ejercicio el NULL es el núnero 0, en teoría estaría mal planteado el ejercicio.

console.clear();

const prompt = require("prompt-sync")();
let number = Number(prompt("Introduce un número: ")); 

//EL CÓODIGO QUE YO HE PLANTEADO

if(isNaN(number)){
    console.log("Has introducido letras, NO VALE");
    console.log(`El número ${number} es NULL`);
}else {
    if (number % 1 == 0) {
    console.log("Es un numero entero");
    console.log(number);
         if(number % 2 == 0){
            console.log(`El número ${number} es par`);
        }else {
            console.log(`El número ${number} es impar`);
        }
    }else {
        console.log("Es un numero decimal NO VALE");
        console.log(number);
    }}
 



