/*Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir el
número por teclado, así hasta que se teclee un número mayor que cero, recuerda la estructura
while.*/
//Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
//Pista: para determinar el resto de una división, se usa la operación módulo %.

console.clear();
const prompt = require("prompt-sync")();
let number1 = Number(prompt(`Introduce un número: `));

while(number1 <= 0){
    number1 = Number(prompt(`Introduce un número mayor de 0: `));
}
if(number1 % 2 === 0){
    console.log(`El número ${number1} es par`);
}else {
    console.log(`El número ${number1} es impar`);
}