/*
Partir del ejercicio 2 y añadir la siguiente funcionalidad:
El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
pantalla:
“Seleccione el número de una de las siguientes opciones:
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Salir del programa.”
*/
console.clear();
const prompt = require("prompt-sync")();
const numero1 = 20;
const numero2 = 40;
//FUNCIÓN FLECHA 

const operacion = [(x,y) => x+y, (x,y) => x-y, (x,y) => x*y, (x,y) => x/y];

console.log (operacion [0] (numero1,numero2)); 
console.log (operacion [1] (numero1,numero2));
console.log (operacion [2] (numero1,numero2));
console.log (operacion [3] (numero1,numero2));
// HAY QUE ARREGLAR EL MENU
let seleccion = 0;
 do {
        console.log("-------------------------------");
        seleccion = Number(prompt("Seleccione el número de una de las siguientes opciones: \n" +
            "1: Sumar \n" +
            "2: Restar \n" +
            "3: Multiplicar \n" +
            "4: Dividir \n" +
            "5: Salir del programa \n"));

        if(seleccion == 1 || seleccion == 2 || seleccion == 3 || seleccion == 4){
            operaciones(seleccion);
        }else if(seleccion !=5){
            console.log("No existe");
        }
   
 } while (seleccion != 5);






// AQUI MI CODIGO   OK
// function pedir_numero() {
//     number = Number(prompt("Dame un número: "));
//     return number;
// }
// function sumar(n1,n2){
//     return n1 + n2;
// }
// function restar(n1,n2){
//     return n1 - n2;
// }
// function multiplicar(n1,n2){
//     return n1 * n2;
// }
// function dividir(n1,n2){
//     return n1 / n2;
// }
// function operaciones(seleccion) {
//     num1 = pedir_numero();
//     num2 = pedir_numero();
//     if(seleccion == 1){
//         resultado_suma = sumar(num1,num2);
//         console.log("La suma de ", num1, "y del ", num2, " es: ", resultado_suma);
//     }else if(seleccion == 2){
//         resultado_resta = restar(num1,num2);
//         console.log("La resta de ", num1, "y del ", num2, " es: ", resultado_resta);
//     }else if(seleccion == 3){
//         resultado_multiplicar = multiplicar(num1,num2);
//         console.log("La multiplicación de ", num1, "y del ", num2, " es: ", resultado_multiplicar);
//     }else if(seleccion == 4){
//         resultado_dividir = dividir(num1,num2);
//         console.log("La división de ", num1, "y del ", num2, " es: ", resultado_dividir);
//     }
//     prompt("Presiona una tecla para seguir...");
// }

// let seleccion = 0;
// do {
//     console.log("-------------------------------");
//     seleccion = Number(prompt("Seleccione el número de una de las siguientes opciones: \n" +
//         "1: Sumar \n" +
//         "2: Restar \n" +
//         "3: Multiplicar \n" +
//         "4: Dividir \n" +
//         "5: Salir del programa \n"));

//     if(seleccion == 1 || seleccion == 2 || seleccion == 3 || seleccion == 4){
//         operaciones(seleccion);
//     }else if(seleccion !=5){
//         console.log("No existe");
//     }
    
// } while (seleccion != 5);


// NO HACE FALTA HACER ESTO SERÍA LA PARTE DE LA LINEA
/*switch (seleccion) {
        case 1:
            /*num1 = pedir_numero();
            num2 = pedir_numero();
            resultado_suma = sumar(num1,num2);
            console.log("La suma de ", num1, "y del ", num2, " es: ", resultado_suma);
            prompt("Presiona una tecla para seguir: ");  * /
            //operaciones(seleccion);
            //break;
            case 2:
                //console.log("restar");
                //break;
            case 3:
                //console.log("multiplicar");
                //break;
            case 4:
                operaciones(seleccion);
                //console.log("dividir");
                break;
            case 5:
                console.log("Salir del programa");
                break;
            default:
                console.log("No existe");
                break;   // no hace falta porner, es el último y sale 
        }
        */