//Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima el promedio y la
//palabra “aprobado” si el alumno tiene un promedio mayor o igual que 5, y la palabra “no aprobado”
//en caso contrario.

console.clear();
const prompt = require("prompt-sync")();
/*
// FOR
    const alumno = Number(prompt("Introduce el número de alumnos: ")); 
    let notas = [];
    // El primer for es para decir cuantos alumnos y las notas
        // let se declara aquí dentro y solo sirve aquí, en el siguiente for hay que declararlo de nuevo
    for (let i=0; i<alumno; i = i + 1){    //i = i + 1 es lo mismo que i++
        notas[i] = Number(prompt(`Introduce nota del alumno ${i}: `)); 
    }
    // El segundo for es para hacer el promedio
    let suma = 0;
        //declarar de nuevo let porque solo sirve dentro del for
    for (let i=0; i<alumno; i++){  //i = i + 1 es lo mismo que i++
        suma = suma + notas[i];
        console.log(`la suma es ${suma}`);
    }
    console.log(`la media es: ${suma/alumno}`);
*/

// FOR     ES LO MISMO QUE EL FOR DE ARRIBA Y AQUÍ SOLO SE HACE SOLO UN FOR
const alumno = Number(prompt("Introduce el número de alumnos: ")); 
let suma = 0;
for (let i=0; i<alumno; i = i + 1){    //i = i + 1 es lo mismo que i++
   // notas[i] = Number(prompt(`Introduce nota del alumno ${i}: `)); 
    suma = suma + Number(prompt(`Introduce nota del alumno ${i}: `)); 
}
console.log(`la media es: ${suma/alumno}`);

/*
//  WHILE    FALTA HACER EL PROMEDIO
    let j = 0;
    while (j< alumno){
        notas[j] = Number(prompt(`Introduce nota del alumno ${j+1}:`)); 
        j = j + 1;
    }
*/
/*
// IF ELSE

const prompt = require("prompt-sync")();
let calificacion1 = Number(prompt("Introduce calificación: ")); 
let calificacion2 = Number(prompt("Introduce calificación: "));
let calificacion3 = Number(prompt("Introduce calificación: "));
let calificacion4 = Number(prompt("Introduce calificación: "));
let calificacion5 = Number(prompt("Introduce calificación: "));
let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) / 5;
console.log(`Promedio: ${promedio}`);
if ((promedio >=5)){
    console.log("Aprobado");
}else{
    console.log("No Aprobado");
}
*/


