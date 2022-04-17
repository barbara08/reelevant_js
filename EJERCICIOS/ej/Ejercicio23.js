/*Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si
no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha
cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de
febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch). */

console.clear();
const prompt = require("prompt-sync")();

//SI FUNCIONA, el mío
let datevalidate=false;
let day = 0;
let month = 0;
let year = 0;

while(datevalidate==false){
    day = Number(prompt(`Introduce el día: `));
    month = Number(prompt(`Introduce el mes: `));
    year = Number(prompt(`Introduce el año: `));
    if(day >= 1 && day <= 31){
        if (month >= 1 && month <= 12){
            if(year >= 0){
                datevalidate = true;
                //console.log("Fecha valida");
            }
        }
    }else{
        console.log("Error");
    }
}

switch(month){
    case 1:
        newmonth = "enero";
        break;
    case 2:
        newmonth = "febrero";
        break;
    case 3:
        newmonth = "marzo";
        break;
    case 4: 
        newmonth = "abril";
        break;
    case 5:
        newmonth = "mayo";
        break;
    case 6:
        newmonth = "junio";
        break;
    case 7:
        newmonth = "julio";
        break;
    case 8: 
       newmonth = "agosto";
       break;
    case 9: 
       newmonth = "septiembre";
       break;
    case 10: 
       newmonth = "octubre";
       break;
    case 11: 
       newmonth = "noviembre";
       break;
    case 12: 
       newmonth = "diciembre";
       break; 
}
console.log(day + " de " + newmonth + " de " + year);


//OTRA FORMA DE HACERLO  CON ARRAY y FUNCIONES
/*   FALTA TERMINAR   AL PROFE NO SE SALE POR EL TEMA DEL AÑO BISIESTO
const prompt = require("prompt-sync")();

// let diasMes = [31,28,31,30,31,30,31,31,30,31,30,31]; lo ha declarado dentro de la funcion
let nombreMes = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio",
                "Julio","Agosto","Septiembre","Octubre","Nombre","Diciembre"];

let day = 0;
let month = 0;
let year = 0;
let terminar = false;

do{
    day = Number(prompt(`Introduce el día: `));
    month = Number(prompt(`Introduce el mes: `));
    year = Number(prompt(`Introduce el año: `));
    terminar = fechavalida(day,month,year);
    if(terminar){
        console.log("fecha errónea");
    }
} while(!terminar)
    console.log(`La fecha es: ${day} de ${nombreMes[month]} de ${year}`);

    function fechavalida (dia,mes,anio){
       // let bisiesto = (anio % 4 === 0 && anio % 400 === 0);  => no hace falta ponerlo lo ha declarado abajo
        let dias = [31,28,31,30,31,30,31,31,30,31,30,31];
        let diasMes;
        if(anio<0 || anio >= 3000){
            return = false;
        }
        if(mes === 2 && (anio % 4 === 0 && (anio % 100 !==0) ||(anio % 400 === 0){
             return = false;
        }
        if(){

        }
    }

*/