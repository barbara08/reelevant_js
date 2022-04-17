/*
Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con
que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir al final del
algoritmo el resultado.
*/
const arrayUno = [7,8,9,10,11];
const arrayDos = [7,8,9,10,11];
let resultado;
for(i=0; i<arrayUno.length; i++){
    if(arrayUno[i] === arrayDos[i]){
        resultado =("Son iguales");

    }else{
        resultado = ("son distintos");
        break;  // se pone para que no siga leyendo el array y rompa el bucle
    }
}
console.log(resultado);

