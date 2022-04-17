/*El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer el
número de unidades consumidas de cada alimento ordenado y calcular la cuenta total. Vamos a
suponer que estos precios son fijos, es decir, que son constantes (recuerda que en PSeInt no se
usa comas para separar la parte decimal de la parte entera).

PRODUCTO            PRECIO              EJERCICIO 24 PARECIDO
Bocadillo de Jamón  1,5€
Refresco            1,05€
Cerveza             0,75€
Pan                    2€
*/
console.clear();
const prompt = require("prompt-sync")();
const precios = [1.50,1.05,0.75,2];
const alimento = ["Bocadillo jamon","refresco","cerveza","pan"];

let Cantidad = Number(prompt("Cantidad consumida: "));




//POR JUANMA OK
console.clear();
const prompt = require("prompt-sync")();
const producto = ["Bocadillo de jamón", "Refresco","Cerveza","Pan"];
const precio = [1.5,1.05,0.75,2];
let suma = 0;
for (let i=0, max=producto.length; i<max;i++){
    let uConsumidas = Number(prompt(`introduce consumo de ${producto[i]}: `));
    suma += (uConsumidas*precio[i]);
}
console.log(`Total de cuenta: ${suma}`);