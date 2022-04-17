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
// borrar la etiqueta de sueldo y nuevosueldo de HTML   con appendchild y createElement

//CODIGO PARA JAVASCRIPT
document.addEventListener ('DOMContentLoaded', evento => initialize(evento));
let ancla ;  // para el HTML

function initialize (evento) {
    
    document.getElementById('sueldoInput').addEventListener("click",evento => vaciar(evento));
    //document.getElementById('categoryInput').addEventListener("click",evento => vaciar(evento));
    document.getElementById('calcular').addEventListener("click",evento => sueldoTotal());
    ancla = document.getElementById('out');   // para el HTML
}

function vaciar(evento) {
  ancla.textContent = "";    // para HTML
    document.getElementById(evento.target.id).value = "";
   
  }

function sueldoTotal() {
    ancla.textContent = "";    // para HTML
    const sueldo = parseInt(document.getElementById('sueldoInput').value);
    const category = parseInt(document.getElementById('categoryInput').value);
    const incremento = [1.15,1.10,1.06,1.03];
    let num = 0;
    num= sueldo*incremento[category-1];
    const nodo = document.createElement("p");  // para el HTML creo esta const
    nodo.textContent = `Su nuevo sueldo es: ${num}`;    //para el  HTML
    ancla.appendChild(nodo);
    /*if(category >= 1 && category < 4){ 
       num= sueldo*incremento[category-1];
    }*/
   // console.log(num);
   // document.getElementById("nuevoSueldoInput").value = `Su nuevo sueldo es: ${num}`;
    //return document.getElementById("nuevoSueldoInput2").innerHTML = num;                                 // para el HTML
}

// este codigo si no quiere poner el resultado en nuevoSueldoInput
//document.getElementById("out").innerHTML = `Su nuevo sueldo es: ${num}`;  

















/*
console.clear();
const prompt = require("prompt-sync")();

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
