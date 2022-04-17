//Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
//sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y
//su nuevo sueldo.
/*
CATEGORIA   INCREMENTO
1             15%
2             10%
3             6%
4             3%
*/

// VARIAS FORMAS DE HACERLO  ARRAY / FOR / WHILE / IF ELSE / SWITCH

console.clear();
const prompt = require("prompt-sync")();
/*
// ARRRAY
let salary = Number(prompt("Introduce su sueldo: ")); 
const category = Number(prompt("Introduce su categoría del 1 - 4: "));
const incremento = [1.15,1.10,1.06,1.03];

if(category >= 1 && category < 4){
  console.log("El nuevo suelddo es ", salary*incremento[category-1]);
}else{
  console.log(("No has introducido bien algún dato"));
}
*/
//WHILE
const incremento = [1.15,1.10,1.06,1.03];
let salary = Number(prompt("Introduce su sueldo: ")); 
const category = Number(prompt("Introduce su categoría del 1 - 4: "));

let indice = 0

while (indice < category) {
  indice = indice + 1 ;
}
if (indice === category){ 
  console.log("El nuevo sueldo es ", salary*incremento[category]-1); //  AQUI FALLA ALGO  FALTA CORREGIR
}else{
  console.log(("No has introducido bien algún dato"));
}

/*
let categoria = Number(prompt("Introduce su categoría: ")); 
let sueldo = Number(prompt("Introduce su sueldo: ")); 
console.log(`Su categoría es: ${categoria}`);
*/ 
/*
// switch
switch(categoria){
    case 1:
        //code block
        nuevosueldo = sueldo * 1.15;
        console.log(`Su nuevo sueldo es ${nuevosueldo}`);
        break;
    case 2:
        //code block
        nuevosueldo = sueldo * 1.1;
        console.log(`Su nuevo sueldo es ${nuevosueldo}`);
        break;
    case 3:
        //code block
        nuevosueldo = sueldo * 1.06;
        console.log(`Su nuevo sueldo es ${nuevosueldo}`);
        break;
    case 4:
        nuevosueldo = sueldo * 1.03;
        console.log(`Su nuevo sueldo es ${nuevosueldo}`);
    default:
        //code block
        console.log("No has introducido bien algún dato");
}
*/

/*
// IF/ELSE
if(categoria == 1){
    nuevosueldo = sueldo * 1.15;
    console.log(`Su nuevo sueldo es ${nuevosueldo}`);
}else if(categoria == 2){
    nuevosueldo = sueldo * 1.1;
    console.log(`Su nuevo sueldo es ${nuevosueldo}`);
}else if(categoria == 3){
    nuevosueldo = sueldo * 1.06;
    console.log(`Su nuevo sueldo es ${nuevosueldo}`);
}else if(categoria == 4){
    nuevosueldo = sueldo * 1.03;
    console.log(`Su nuevo sueldo es ${nuevosueldo}`);
}else{
    console.log("No has introducido bien algún dato");
}

*/
/*  OTRA FORMA CON IF/ELSE
const sueldo = Number(prompt("Sueldo:   "));
const categoria = Number(prompt("Categoría entre 1-4:   "));
if (!isNaN(sueldo) && !isNaN(categoria)) {
  let incremento = 0;
  switch (categoria) {
    case 1: {
      incremento = 1.15;
      break;
    }
    case 2: {
      incremento = 1.1;
      break;
    }
    case 3: {
      incremento = 1.06;
      break;
    }
    case 4: {
      incremento = 1.03;
      break;
    }
    default: {
      console.log("Las categorias son entre 1-4");
    }
  }
  if (incremento > 0) {
    console.log("El sueldo nuevo es:   ", sueldo * incremento);
  }
} else {
  console.log("Error de entrada");
}
*/