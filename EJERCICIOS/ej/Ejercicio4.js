// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.
console.clear();
const prompt = require("prompt-sync")();
let number1 = Number(prompt("introduce un número: ")); 
let number2 = Number(prompt("introduce el segundo número: "));
let number3 = Number(prompt("introduce el tercer número: "));


//funcion  isNaN(poner el dato) y devuelve true o false
// isNaN is not a number   isNaN(number1) es true

if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
    const producto = number1*number2*number3; // PONER LA VARIABLE AQUÍ DENTRO EN VER DE FUERA DEL IF 
    console.log("Introduce numeros NO letras");
}else if(number1 < 0 ){
    const suma = number1+number2+number3;
    console.log(producto);
}else{
    console.log(suma);
}


