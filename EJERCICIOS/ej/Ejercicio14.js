/*
Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina, que
registran lo que surten en galones, pero el precio de la gasolina se fija en litros. El algoritmo debe
calcular e imprimir el precio que hay que cobrarle al cliente.
Precio gasolina = 1.333€/litro
1 galón = 3,78541 litros
*/

const prompt = require("prompt-sync")();
let PrecioGasolina = 1.333;   //Precio gasolina = 1.333€/litro
let galon = 3.78541;          //1 galón = 3,78541 litros

const CantidadGalones = Number(prompt("Cuantos litros has repostado: "));
let ImporteTotal = CantidadGalones * galon * PrecioGasolina;

console.log(`El importe total a pagar son: ${ImporteTotal}`);




