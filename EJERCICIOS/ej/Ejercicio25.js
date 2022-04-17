/*Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese
tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
Ejemplo, para lado = 4 escribiría:
* * * *
*     *
*     *
* * * *
Recuerda la estructura repetitiva For.*/

console.clear();
const prompt = require("prompt-sync")();

/* SOLUCIÓN DE SOLER  OK
let lado= Number(prompt(`Introduce un número: `));
let fila=0;
let columna=0;

for (fila = 0; fila <lado; fila++){
    if (fila == 0 || fila == lado - 1){
        let texto = "";
        for (columna=0; columna<lado; columna++){
            texto = texto + "*";
        }
        console.log(texto);
    }else{
        texto = "";
        for (columna = 0; columna<lado; columna++){
            if (columna == 0 || columna == lado - 1){
               texto = texto + "*";
            }else{
                texto = texto + " ";
            }
        }
        console.log(texto);
    }
}
*/
//SOLUCION DEL PROFE   CON FUNCION   OK
let max= Number(prompt(`Introduce un número: `));
//const max= 4; con la constante no sale
for(let i=0; i<max; i++){
    console.log(imprimir_linea(i));
}
function imprimir_linea(num_linea){ // num_linea es i (del for) pero OJO no es lo mismo, es una copia
    let linea = "";
    if(num_linea === 0 || num_linea === max-1){
        return rellenar_linea("*","*");
    }else{
        return rellenar_linea("*"," ");
    }
}

function rellenar_linea(extremo,central){
    let linea = "";
    let caracter;
    for (let i = 0; i<max; i++){
        if(i === 0 || i === max-1){
            caracter = extremo;    // linea += extremo (es lo mismo)
        }else{
            caracter = central;    // linea += central (es lo mismo)
        }
        linea = linea + caracter;  //linea += caracter  (es lo mismo)
    }
    return linea;
}








/* EL MÍO QUE ES INFINITO NO EJECUTAR

let rows=0;
let colums=0;

while(rows <= 0 && colums<=0) {
    //Linea primera
    for(i = 0; i < 0; i++) {
        
        console.log("*primera");
        console.log("*");
    }
    //centro del cuadrado
    for(i = 0; i < lado-2; i++) {
        console.log("*centro");
        console.log("*");
        for(j = 0; j < lado-2; j++) {
            console.log(" ");
        }
        console.log("*centro");
        console.log("*");
    }
    //Linea última
    for(i = 0; i < lado; i++) {
        console.log("*ultima");
    }
    console.log("Error");
}
*/




















/*
if(lado >= 0 && lado<=50) {
    //Linea superior
    for(i = 0; i < lado; i++) {
        console.log("*");
    }
    //centro de la forma
    for(i = 0; i < lado-2; i++) {
        console.log("*");
        for(j = 0; j < lado-2; j++) {
            console.log(" ");
        }
        console.log("*");
    }
    //Linea inferior
    for(i = 0; i < lado; i++) {
        console.log("*");
    }
}else {
   console.log("Error. El dato a ingresar de "
            + "estar entre 0 y 50");
}
*/
