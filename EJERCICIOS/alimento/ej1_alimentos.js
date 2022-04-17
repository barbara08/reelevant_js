
/*
-Crear un script que defina un objeto llamado Producto_alimenticio.
-Este objeto debe presentar las propiedades código, nombre y precio, además del método imprimeDatos, 
el cual escribe por pantalla los valores de sus propiedades.
-Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados
*/

/*
PARA SABER PORQUE SE PONE THIS, THIS es para que js distinga entre parámetro y lo de de dentro d ela funcion

function producto_alimenticio(x, y, z) {
    codigo = x;
    nombre = y;
    precio = z;
}
*/

function producto_alimenticio(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.mostrar = function (){
        console.log(this.nombre, this.codigo, this.precio);

    }
}
// con new se crea un nuevo objeto de la clase producto_alimenticio
let producto_uno = new producto_alimenticio(5, "bocadillo", 3);  
let producto_dos = new producto_alimenticio(6, "legumbres", 2);
let producto_tres = new producto_alimenticio(7, "pan", 0.50);
// cuando solo queremos leer el array, nos da igual la posición
let array_nuevo = [producto_uno, producto_dos, producto_tres];
for (let item of array_nuevo) {
    item.mostrar();
}








