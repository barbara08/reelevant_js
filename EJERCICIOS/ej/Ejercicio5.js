//Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo,
//negativo o nulo.

console.clear();
const prompt = require("prompt-sync")();
let number = Number(prompt("Introduce un número: ")); 

if(isNaN(number)){
    console.log("Has introducido letras, NO VALE");
} else if (number % 1 == 0) {
    console.log("Es un numero entero");
    console.log(number);
}else {
    console.log("Es un numero decimal");
    console.log(number);
}
if(number >= 0){
    console.log(`El numero ${number} es positivo`);
}else if(number < 0){
    console.log(`El numero ${number} es negativo`);
}else{
    console.log(`El numero ${number} es nulo`);
}