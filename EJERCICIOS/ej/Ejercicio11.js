/*
En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El
descuento se basa en:
Si el monto es menor que 500€ -> No hay descuento
Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
Más de 15.000€ -> 25% descuento
Imprimir (Escribir) el precio final.

https://stackoverflow.com/questions/17145723/how-can-i-use-ranges-in-a-switch-case-statement-using-javascript
*/

console.clear();
const prompt = require("prompt-sync")();
const monto = Number(prompt("Introduce cuanto has gastado: "));
let preciofinal = 0;   //se va a calcular por lo que cambiará y hay que declararlo con let

switch (true) {   //poner expresión que siempre sea TRUE para que entre en switch
    case monto > 0 && monto < 500:
        // console.log(`Su precio final es de: ${monto}`);   
        break;
    case monto > 500 && monto <= 1000:
        preciofinal = monto / 1.05;
        //  console.log(`Su precio final es de: ${preciofinal}`);
        break;
    case monto > 1000 && monto < 7000:
        preciofinal = monto / 1.10;
        //   console.log(`Su precio final es de: ${preciofinal}`);
        break;
    case monto > 7000 && monto < 15000:
        preciofinal = monto / 1.20;
        //   console.log(`Su precio final es de: ${preciofinal}`);
        break;
    case monto > 15000:
        //code block
        preciofinal = monto / 1.25;
        //   console.log(`Su precio final es de: ${preciofinal}`);
        break;
    //default: en case 1 poner
    //preciofinal = monto / 1.25;
}
if (preciofinal != 0) {
    console.log(`*Su precio final es de: ${preciofinal}`);
} else {
    console.log(`Su precio final es de: ${monto}`);
}
/*
//OTRA FORMA DE HACERLO CON IF ELSE
const monto = Number(prompt("Introduce cuanto has gastado: "));
let preciofinal = 0;   //se va a calcular por lo que cambiará y hay que declararlo con let

if (monto > 0 && monto < 500) { // cuando introducimos un número negativo da resultado por lo que no está bien
    //console.log(`Su precio final es de: ${monto}`);
} else if (monto > 500 && monto <= 1000) {
    preciofinal = monto / 1.05;
    //console.log(`Su precio final es de: ${preciofinal}`);
} else if (monto > 1000 && monto < 7000) {
    preciofinal = monto / 1.10;
    //console.log(`Su precio final es de: ${preciofinal}`);
} else if (monto > 7000 && monto < 15000) {
    preciofinal = monto / 1.20;
    //console.log(`Su precio final es de: ${preciofinal}`);
} else {
    preciofinal = monto / 1.25;
    //console.log(`Su precio final es de: ${preciofinal}`);
}
if (preciofinal != 0) {
    console.log(`*Su precio final es de: ${preciofinal}`);
} else {
    console.log(`Su precio final es de: ${monto}`);
}
*/

