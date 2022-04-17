/*
Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
a) ¿En qué mes se registró el mayor coste de producción de dulces?
b) Promedio anual de los costes de producción de bebidas
c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor
coste?
d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?
*/

// ESTAS CONSTANTES SIRVEN PARA LAS SOLUCIONES QUE TENGO 
console.clear();
const prompt = require("prompt-sync")();

const meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio",
                "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const departamentos = ["Dulces", "Bebidas","Conservas"];
const MAX_MESES = meses.length;
const MAX_DEP = departamentos.length;


/* MI CÓDIGO  ok
// inicializamos los datos
let costes = [];
for (let fila=0; fila<MAX_DEP; fila++) {
    costes[fila] = [];
    for (let col=0; col<MAX_MESES; col++){
        costes[fila][col] = Math.floor(Math.random() * 100000) + 20000;
    }
}
console.log(costes);

// a) ¿En qué mes se registró el mayor coste de producción de dulces?

let mayor_produuccion_dulces = -1;
let mes_mayor_produccion_dulces = -1;
for (let col=0; col<MAX_MESES; col++) {
    
    //let dato = costes[0][col]; 
  //  let mes = col;
  //  console.log(col,  '->', dato , '->', meses[mes]);
    
    if (mayor_produuccion_dulces < costes[0][col]){
        mayor_produuccion_dulces = costes[0][col];
        mes_mayor_produccion_dulces = col;
    }
}
console.log("A:", mes_mayor_produccion_dulces, '->', meses[mes_mayor_produccion_dulces]);

// b) Promedio anual de los costes de producción de bebidas
let suma_coste = 0;
let num_coste = 0;
for (let col=0; col<MAX_MESES; col++){
    
  //  let dato = costes[1][col];
   // let mes = col;
    
   suma_coste += costes[1][col];
   num_coste++;
}
console.log("B: ", suma_coste, num_coste, suma_coste/num_coste);

// c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor
let max_bebidas = -1;
let mes_max_bebidas = -1;
let min_bebidas = -1;
let mes_min_bebidas = -1;
for (let col=0; col<MAX_MESES; col++){
    let dato = costes[1][col];
    let mes = col;
    if (max_bebidas < dato){
        max_bebidas = dato;
        mes_max_bebidas = mes;
    }
    if (min_bebidas > dato || mes_min_bebidas == -1){
        min_bebidas = dato;
        mes_min_bebidas = mes;
    }
}
console.log("C: max mes bebidas: ", mes_max_bebidas, meses[mes_max_bebidas], "min mes bebidas: ", mes_min_bebidas, meses[mes_min_bebidas]);

// d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?
let menor_dic = -1;
let indice_mes_menor_dic = -1;
for (let fila = 0; fila < MAX_DEP; fila++){
    // let dato = costes[fila][11];
    // let indice_departamento = fila;

    if (menor_dic > costes[fila][11] || indice_mes_menor_dic == -1){
        menor_dic = costes[fila][11];
        indice_mes_menor_dic = fila;
    }
}
console.log("D: ", indice_mes_menor_dic, departamentos[indice_mes_menor_dic]);
*/


//OTRA FORMA DE PROFE 

const costes = [];    // es un puntero por eso puede ser const lo que no se puede destruir
// las constantes están arriba del todo declaradas

for(let i=0; i < MAX_DEP; i++){
    const items = [];
    for(let j=0; j < MAX_MESES; j++){
        items[j] = Math.floor(Math.random() * 100000) + 20000;
        //costes[i][j] = Math.floor(Math.random() * 100000) + 20000;   
        //NO DEJA HACERLO ARRAY MULTIDEMENSIONAL por lo que crea un nuevo array items
    }
    costes[i] = items;
}

console.log("costes",costes);

// a) ¿En qué mes se registró el mayor coste de producción de dulces?
let maxCostes = -1;
let maxPos= -1;

for (i=0; i<MAX_MESES; i++){
    if(costes[0][i] > maxCostes){
        maxCostes = costes[0][i];
        maxPos = i;
    }
}

console.log("El mes ", meses[maxPos], "fue el de mayor coste con un valor de ", maxCostes);

// b) Promedio anual de los costes de producción de bebidas
let suma = 0;
for(i=0; i<MAX_MESES; i++){
    suma  += costes[1][i];
}

console.log("El promedio del departamento de ", departamentos[1], suma/MAX_MESES);


//c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?

let minCostes = Infinity;
maxCostes = Infinity;
let minPos = -1;
//let maxPos = -1; ya está declarada arriba

for(i=0; i<MAX_MESES; i++){
    if(costes[1][i] > maxCostes){
        maxCostes = costes[1][i];
        maxPos = i;
    }
    if(costes[1][i] < maxCostes){
        maxCostes = costes[1][i];
        minPos = i;
    }
}
// A PARTIR DE AQUÍ HACIA ABAJO FALTA TERMINAR
console.log("El mes ", meses[maxPos], "fue el de mayor coste con un valor de :  ", maxCostes);
console.log (("El mes ", meses[maxPos], "fue el de menor coste con un valor de :  ", minCostes));


// d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?

minPos = -1; 
minCostes = Infinity;

for(i=0; i<MAX_DEP; i++){
    if(costes[i][11] < maxCostes){
        maxCostes = costes[i][11];
        minPos = i;
    }

}
// falta console.log(costes)


// CÓDIGO REFACTORIZADO por profe 

