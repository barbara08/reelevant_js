//Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y
//100.

// SI SALE, OK
console.clear();

const prompt = require("prompt-sync")();
contador = 0;
cantidadDos = 0;
cantidadTres = 0;
for(contador = 1; contador <= 100; contador++){
    if(contador % 2 == 0){
        console.log(`multiplo de 2: ${contador}`);  // se puede poner fuera del for
        cantidadDos++;    // para que salga la cantidad de múltiplos de DOS conlose.log lo ponemos fuera del for
    }
    if(contador % 3 == 0){
        console.log(`multiplo de 3: ${contador}`);
        cantidadTres++;   // para que salga la cantidad de múltiplos de TRES conlose.log lo ponemos fuera del for
    }
} 
console.log(`dos: ${cantidadDos}`);
console.log(`tres: ${cantidadTres}`);


/* OTRA FORMA DE HACERLO,  DE JUANMA, AQUÍ SOLO SALE LA CANTIDAD DE MULTIPLOS QUE HAY NO EL LISTADO
AUNQUE ESTA NO ES UNA FORMA MUY ELEGANTE DE EXPRESARLO AUNQUE FUNCIONA BIEN*/
/*
let MultiplosDos = 0;
let MultiplosTres = 0;

for(let i = 1; i <= 100; i++){
    i%2 == 0 ? MultiplosDos++ :{};
    i%3 == 0 ? MultiplosTres++ :{};  
    // sería así pero hay que cambiar los nombres de las variables =>  cantidadDos += (contador % 2 == 0) ? 1: 0;   //operador condicional
} 
console.log(`la cantidad de múltiplos de DOS son: ${MultiplosDos}`);
console.log(`la cantidad de múltiplos de TRES son: ${MultiplosTres}`);
*/