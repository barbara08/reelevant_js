/*
Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.
*/
console.clear();
const prompt = require("prompt-sync")();

// 1. FORMA CON BUCLE SIN FUNCIÓN

let lista = [];
let items;
let index = 0;

do{
    items = prompt ("Dame nombre: ");
    if(items !==""){
        lista[index++] = items;
       // index++;
    }

}while (items !=="");

console.log("Con bucle: ");
console.log("lista desordenada: ", lista);
console.log("lista ordenada: ", lista.sort());


console.log("Con Funciones: ");

// 2. OTRA FORMA 
const lista_fija = ["carro", "manta", "leche"];


    function compare (a,b) {
        //console.log("cc", a,b);           // ? mientras (confirmar si es así) 1 (si se cumple): -1 (si no se cumple)
        return (a>b) ? 1: -1;   //DEPENDIENTO SI ES ASCENDENTE O DESCENDENTE a<b y usar operador ternario
    }
    lista_fija.sort(compare);
    console.log("Función normal: ", lista_fija);


// 3. OTRA FORMA CON FUNCIÓN FLECHA

    console.log("funcion flecha: ", lista_fija.sort( (a,b) => (a>b) ? 1: -1 )); 