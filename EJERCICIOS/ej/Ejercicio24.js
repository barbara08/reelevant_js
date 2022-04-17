/*Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula según
el siguiente criterio: la parte práctica vale el 10%; la parte de problemas vale el 50% y la parte
teórica el 40%. El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado y
volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. Las
notas deben estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje de error
y volverá a pedir otro alumno.*/

console.clear();
/*
// EL MÍO,  falta ver porque no sale el error cuando metes student ""
const prompt = require("prompt-sync")();
let nameStudent = "l";

while (nameStudent != ""){
    let nameStudent = prompt("Introduce nombre del alumno: ");

    if(nameStudent != ""){
        let notePractice = Number(prompt("Introduce la nota práctica: "));
        let noteProblem = Number(prompt("Introduce la nota problema: "));
        let noteTheoretical = Number(prompt("Introduce la nota teórica: "));
        if( (notePractice >= 0 && notePractice <= 10) && 
            (noteProblem >=0 && noteProblem<=10) && 
            (noteTheoretical>=0 && noteTheoretical<=10) 
            ){ // calcular e imprimir
                finalResult = (notePractice * 0.10) + (noteProblem * 0.5) + (noteTheoretical * 0.40);
                console.log(finalResult);
        }else{
            console.log("Error en las notas");
        }
    }
}
*/
/*
//SOLUCION PROFE   SIN ARRAY  ok
const prompt = require("prompt-sync")();
let nombre;
do{
    nombre = prompt("Introduce nombre del alumno: ");       //capturar nombre
    if(nombre !== ""){                                      //if (nombre distinto de blanco)
        calcula_notas (nombre);                              // calcula nota alumno
    }
}while(nombre != "");   // con las notas se podría meter en array
    function calcula_notas (alumno){
        let nota_practica = pedir_nota("practica",10);
        let nota_teorica = pedir_nota("teorica",40);
        let nota_problemas = pedir_nota("problemas",50);
        console.log(`La nota de ${alumno} es ${nota_practica+nota_teorica+nota_problemas}`)
    }
    function pedir_nota(nota,porcentaje){
        let valor = Number(prompt(`Introduce la nota ${nota}: `));
        return valor * porcentaje / 100;
    }
*/
//SOLUCION PROFE   CON ARRAY 
const prompt = require("prompt-sync")();
const notas = ["practica","teoria","problemas"];
const pasos = [10,40,50];
let nombre = "l";
do{
    nombre = prompt("Introduce nombre del alumno: ");       //capturar nombre
    if(nombre !== ""){                                      //if (nombre distinto de blanco)
        calcula_notas (nombre);                              // calcula nota alumno
    }
}while(nombre != ""); 
    function calcula_notas (alumno){
        let nota = 0;
        for(let i=0; i<notas.length; i++){
            nota += pedir_nota (notas[i].pesos[i]); 
        }
        console.log(`La nota de ${alumno} es ${nota}`)
    }
    function pedir_nota(nota,porcentaje){
        let valor = Number(prompt(`Introduce la nota ${nota}: `));
        return valor * porcentaje / 100;
    }


/*
//ESTE DEBE DE SALIR BIEN ES EL MISMO DE ARRIBA CON ARRAY
const prompt = require("prompt-sync")();
const notas = ["Práctica","Teórica","Problemas"];
const pesos = [10,40,50];
let nombre;
do {
    nombre = prompt("Introduce el nombre: ");
    if (nombre !== "") {
      calcula_notas (nombre)
    }
} while (nombre !== "");
function calcula_notas (alumno) {
    let nota = 0;
   for (let i=0; i<notas.length;i++) {
    nota += pedir_nota (notas[i],pesos[i]);    
   }
  
   console.log (`La nota de ${alumno} es ${nota}`);
}
function pedir_nota (nota,porcentaje) {
    let valor = Number(prompt(`Introduce la nota de ${nota}:`));
    return valor * porcentaje / 100;
}
*/