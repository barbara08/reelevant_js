
//Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado,
//calcule e imprima el cambio que se debe entregar al cliente.
console.clear();


const prompt = require("prompt-sync")();
let CosteArticuloVendido = Number(prompt("Coste del artículo vendido: "));
let CantidadDineroEntregado = Number(prompt("Cantidad de dinero entregado: "));


if(CosteArticuloVendido < CantidadDineroEntregado){
    let CambioAentregar = CantidadDineroEntregado - CosteArticuloVendido;
console.log(`El cambio a entregar al cliente son : ${CambioAentregar}`);
}else{
    console.log(`El artículo Vendido no puede ser inferior a la cantidad entregada`);
}

