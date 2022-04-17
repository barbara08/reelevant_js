/*
Una calculadora de la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI
completo con la letra. Para calcular la letra, cogeremos el resto del DNI entre 23, que será un
número entre 0 y 22. Utilizar el resultado para buscar en un array de caracteres la posición que
corresponda a la letra. Esta es la tabla de caracteres:
Posicion Letra      11 B
0           T       12  N
1           R       13 J
2           W       14 Z
3           A       15 S
4           G       16 Q
5           M       17 V
6           Y       18 H
7           F       19 L
8           P       20 C
9           D       21 K
10          X       22 E
*/

console.clear();
const prompt = require("prompt-sync")();
let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


let number = Number(prompt("Introduzca un número: "));
   // longitudnumber = number.length;    // FALTA COMPROBAR LA CANTIDAD DE NUMERO QUE ES 8
    //if(longitudnumber ==8){

    let resto = number % 23;
    if (resto > 0 || resto < 22) {
        console.log(number, "-", letra[resto]);
    }else{
        console.log("Lo has introducido mal");
    
}


/* OTRA FORMA DE HACER   OK
let number;
do{
    number = prompt("Introduzca un número de 8 dígitos: ");
    longitudnumber = number.length;
    if(longitudnumber !=8){
        console.log("Lo has introducido mal");
    }
    
}while (longitudnumber !=8)
       
   
let resto = Number(number) % 23;
console.log(number, "-", letra[resto]);
*/




