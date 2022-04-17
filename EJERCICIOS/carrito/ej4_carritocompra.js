/* Crear un catálogo de productos, donde de cada producto contenga código, descripción y precio. 
Se permitirá añadir nuevos producto, eliminar productos por su código y buscar productos por código o descripción. 
La búsqueda por código será exacta y la búsqueda por descripción podrá especificar una parte de la descripción.
La búsqueda podrá devolver varios productos.
También se creará una función que nos liste el catálogo por consola.*/

//PDF carritodelacompra_JS.PDF

class CatalogoProducto {
  constructor(alto, ancho) {
    this.code = codigo;
    this.description = descripcion;
    this.price = price;
  }
}
const catalogoProducto = [
    
    {
        codigo: "D10",
        descripcion: "leche",
        precio: 0.60,  
    },
    {
        codigo: "A24",
        descripcion: "agua",
        precio: 0.24,  
    },
    {
        codigo: "P50",
        descripcion: "pan",
        precio: 0.50,  
    }
]
   console.log(catalogoProducto);
   
   for(let item in catalogoProducto){
    if(catalogoProducto[item].codigo === "P50"){
        console.log("es correcto")
    }else{
        console.log(catalogoProducto[item.codigo]);
        console.log("no  se ");
    }

    f_each(catalogoProducto[item], item, catalogoProducto);
}
console.log("-------uso foreach--------------");
catalogoProducto.forEach(function(item){
    console.log(item);
});

/*
function catalogo(codigo,descripcion,precio){
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.prductoElegido = function (){
        for(let item of catalogoProducto){
            if(catalogoProducto.codigo === "P50"){
                console.log("es correcto")
            }
        }
        return console.log("es correcto")
    }

}

*/









/*
console.log("---------");
let a = [[3,4,4,4],[3,4,4,4],[1,2,3,4],[1,2,4,3]];
console.log(a);

let b = {'a': ['a',3,4,4,4], 'b':2};
console.log(b);
b['0'] = [1,2,3];
// console.log(b['a']);
console.log(b);
// console.log(b.a);
// console.log(b.b);
console.log("-----------------");
let c = {1: [1,1,1,,1,1], '1': [2,2,2,2,2]};
console.log(c);
console.log(c[1]);
console.log(c['1']);
*/
/*
//diccionario
{ 
1: {"c": 1, 'p': 2, 'd': 'lapiz'},
2: {"c": 2, 'p': 3, 'd': 'boli'},
'A': {"c": 'A', 'p': 3, 'd': 'boli NEGR'}
}
*/
/*  
console.log("--1-----uso foreach--------------");
function f_each(item, index, array){
    console.log('it', item, 'id', index, 'a', array, 'comparaicon', item === array[index]);
}
catalogoProducto.forEach(f_each);
console.log("---2----uso foreach--------------");
*/




/*
function Producto(codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

catalogo = [];

let add_producto = new Producto("d14", "leche", 0.50);
catalogo.push(add_producto);
console.log(catalogo);
*/
