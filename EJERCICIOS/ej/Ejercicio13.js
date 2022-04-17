/*
Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el
perímetro y la superficie del mismo.
Superficie= base*altura
Perímetro = 2*(base + altura)
Comprobar los resultados con varios datos de entradas diferentes.
*/
console.clear();
const prompt = require("prompt-sync")();

const base = Number(prompt("Introduce la base: "));
const altura = Number(prompt("Introduce la altura: "));
const superficie = base*altura;
const perimetro= 2*(base+altura);

console.log(`La superficie del rectángulo es de: ${superficie}`);
console.log(`El perímetro del rectángulo es de: ${perimetro}`);

/* SI SE PONE ESTOS DOS CONSOLE.LOG NO HAY QUE DECLARAR LAS CONST superficie NI perimetro
console.log("La superficie del rectángulo es de: ", base*altura);
console.log("El perímetro del rectángulo es de: ", 2*(base+altura));
*/