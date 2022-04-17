//Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media
//de todos ellos. Piensa como debemos inicializar las variables.

//while no sabes la cantidad de veces
//for si sabes la cantidad de veces

console.clear();
const prompt = require("prompt-sync")();

let numeroentero = 1;
contador = 0;
maximo=0;
minimo=0;
media=0;
while(numeroentero != 0){
    numeroentero= Number(prompt(`Introduce OTRO número: `));
    contador++;
   // console.log(contador);
  //  console.log(numeroentero);
   // minimo=numeroentero;
    if(minimo){
        minimo=numeroentero;
    }
   
}

console.log(minimo);
console.log(maximo);
console.log(media);