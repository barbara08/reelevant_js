/* Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales
  (recuerda usar la estructura condicional if).
   Ahora con 3 números diferentes.
 */
    console.clear();
   // SIN PEDIR NUMERO AL USUARIO
    /* 
    const number1 = 15
    const number2 = 15
    cosnt number3 = 7
    */
   //PEDIR NUMERO AL USUARIO
    const prompt = require("prompt-sync")();
    let number1 = Number(prompt("introduce un número: ")); 
    let number2 = Number(prompt("introduce el segundo número: "));
    let number3 = Number(prompt("introduce el tercer número: "));
   
    //EL CODIGO CON DOS NÚMEROS (EL CODIGO ES EL MISMO)
    /*
   if(number1 > number2){
      // console.log("El numero " + number1 + " es mayor que " + number2); MEJOR EL DE ABJO
       console.log(`El numero ${number1} es mayor que ${number2}`); 

   }else if(number1 === number2){
       console.log("los dos numeros son iguales");
   }else{
    console.log(`El numero ${number1} es menor que ${number2}`); 
   }
   */

   //EL CODIGO CON TRES NÚMEROS (ARRIBA DECLARO OTRA VARIABLE)

   if(number1 > number2 && number1 > number3){
        console.log(`El numero ${number1} es mayor que ${number2} y que ${number3}`);
   }else if(number2 > number3 && number2 > number1){
        console.log(`El numero ${number2} es mayor que ${number3} y que ${number1}`);
   }else if(number1 === number2 && number1 === number3){
        console.log("Los tres numero son iguales");
   }else{ 
       if(number2 === number3){
           console.log(`El número ${number2} y el numero ${number3} son iguales y mayores que ${number1}`)
       }else if(number1 === number3){
        console.log(`El número ${number1} y el numero ${number3} son iguales y mayores que ${number2}`)
        }else{
        console.log(`El numero ${number3} es mayor que ${number1} y que ${number2}`);
       }
   }


