/*Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
• Investigar cómo hacer los intervalos en JS*/

//Un segundo es igual a mil milisegundos, así que si quieres esperar 3 segundos, 
//tienes que pasar 3000 como segundo argumento
//Existen dos funciones nativas en la librería de JavaScript para lograr estas tareas: 
//setTimeout() y setInterval().

//1 segundo --- 1000 ms

console.clear();
const prompt = require("prompt-sync")();

let tiempo = Number(prompt(`Introduce los segundos: `));
let segundo = tiempo*1000; // se puede poner en el setTimeout abajo

function sonidotelefono(){
    console.log("¡¡Ring!!");
    clearTimeout(segundo);
}
  
setTimeout(sonidotelefono, segundo);     // se ejecuta solo una vez
//setInterval(sonidotelefono, tiempo);  // cada x tiempo se dispara 








