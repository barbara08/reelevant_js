/*teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo
tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
*/
console.clear();
const prompt = require("prompt-sync")();

let clave ="eureka";
let password = prompt(`Introduce la clave: `);
let contador=0;

while(password != clave && contador<3){
    password = prompt(`Introduce de nuevo la clave: `);
    contador++;
}

if(password != clave){
    console.log("Has introducido los 3 intentos");
}

