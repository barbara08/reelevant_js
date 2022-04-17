//Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de sueldo del 15%
//si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.

console.clear();


const prompt = require("prompt-sync")();
let sueldo = Number(prompt("Introduce su sueldo: "));

if(sueldo >= 1000){
    let nuevosueldo = sueldo * 1.15; 
    console.log(nuevosueldo);
}else{
    console.log(sueldo);
}