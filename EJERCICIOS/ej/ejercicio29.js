
document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

function initialize (evento) {
    document.getElementById('calcular').addEventListener("click",calcular);
    document.getElementById('numero').addEventListener("click",vaciar);
}

function vaciar() {
  document.getElementById('numero').value = "";
}

function calcular() {
  const num = document.getElementById('numero').value;
  document.getElementById("out").innerHTML = `El factorial de ${num} es ${factorial(num)}`;
}

function factorial(numero) {
  return numero !== 1 ? numero * factorial(numero - 1) : 1;
}