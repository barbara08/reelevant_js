/*Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir
estos números de forma descendente
*/
let a = [25,10,9,34,45,12,5,8];

// CON FUNCIÓN NORMAL 

    a.sort(compare);

    function compare (a,b) {
        console.log(a,b);
        return (a>b) ? 1: -1;
    }
console.log("Función normal", a);

// OTRA FORMA CON FUNCIÓN FLECHA

    a.sort( (a,b) => (a>b) ? 1: -1 ); 

    console.log("Función flecha", a);

    