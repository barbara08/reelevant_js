document.addEventListener("DOMContentLoaded", (evento) => initialize(evento));
let ancla; //creamos un ancla
function initialize(evento) {
  document.getElementById("nuevo").addEventListener("click", aumento);
  document.getElementById("sueldo").addEventListener("click", (event) => vaciar(event));
  document.getElementById("categoria").addEventListener("click", (event) => vaciar(event));
  ancla = document.getElementById("out");//al inicializar identificamos el ancla con el nodo
}
function vaciar(event) {
  ancla.textContent = ''; //para vaciar el resultado antes de seguir escribiendo
  document.getElementById(event.target.id).value = ""; /*el target llama al elemento que queramos, categoría, salario
  o calcular. Así solo tenemos una función vaciar para todo*/
}
function aumento() {
  ancla.textContent = '';//para vaciar el resultado antes de seguir escribiendo
  let sueldo = parseInt(document.getElementById("sueldo").value); //utilizamos parseIn para pasar un string a un número
  let categoria = parseInt(document.getElementById("categoria").value);
  let incrementos = [1.15, 1.1, 1.06, 1.03];
  let nuevo = sueldo * incrementos[categoria];
  const aumento = parseInt(document.getElementById("nuevo").value);
  const nodo = document.createElement("p"); //el elemento puede ser p,div,label, etc
  nodo.textContent = `El aumento es ${nuevo}`;
  ancla.appendChild(nodo);//añadimos un hijo que anclamos a la referencia de html out
}