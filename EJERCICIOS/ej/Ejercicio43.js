/*
Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la
estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla”.
    clearTimeout()  setTimeout() y setInterval(). 
*/

console.clear();
const prompt = require("prompt-sync")();

console.log(new Date());

function reloj(){
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();

    console.log(hora_actual = hora + ":" + minuto + ":" + segundo);
}
function parar_reloj (){
    console.log("Reloj parado");
    clearTimeout(arranca_reloj);
}

arranca_reloj = setInterval(reloj, 1000);       // arrancamos el reloj 
setTimeout(parar_reloj, 10 * 1000);             // paramos el reloj 




// OTRA FORMA DE HACERLO PROFE  OK  PERO NO SE CUANDO PARA
/*
let hora = 0;
let min = 0;
let seg = 0;
setInterval (() => {    // CON FUNCION FLECHA
    console.clear();
    if (seg===59) {
        seg = 0;
        if (min===59) {
            min = 0;
            if (hora === 23) {
                hora = 0;
            } else {
                hora++;
            }
        } else {
            min++;
        }
    } else {
        seg++;
    }
    console.log(`${hora}:${min}:${seg}`);
},1000);
*/