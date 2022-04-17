
//carrito de la compra.pdf

function Producto(codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}
function Catalogo() {
    this.items = [];
    this.add = function (producto) {    //includes no sirve
        if (!this.items.some(item => item.codigo === producto.codigo)) {
            this.items.push(producto);
        }
    }
    this.delete = function (codigo) {   // findeindex
        const pos = this.items.findIndex(x => x.codigo === codigo);
        if (pos >= 0) {
            this.items.splice(pos, 1);
        }
    }
    this.buscar = function (code) { // filter => siempre devuelve array 
        const result = this.items.filter(element => element.codigo === code);
        if(result.length===0){  //para comprobar que el array está vacío
            console.log("NO hay coincidencia");
        }else{
            console.log("SI hay coincidencia", result);
        }
    }
    this.imprimir = function (){
        for(let element of this.items){
        }return this.items;
    } 
}
class carrito{
    array_carrito = [];
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    iniciar(catalogo){
        this.catalogo = catalogo;
    }
    empty(){

    }
    add(codigo,cantidad){
        //primero buscar producto si está en el catalogo
        const buscar = this.items.filter(element => element.codigo === code);
        
    }
}




const cat = new Catalogo();

//const producto1 = new Producto(1, "Tomate", 5);
//cat.add (producto1);
cat.add(new Producto(2, 'cebolla', 0.9));
cat.add(new Producto(3, 'pimiento', 1.15));
cat.add(new Producto(4, 'lechuga', 0.60));
cat.add(new Producto(5, 'canonigo', 1));
cat.add(new Producto(6, 'tomate', 1.80));
cat.add(new Producto(7, 'calabacin', 1.30));
cat.add(new Producto(8, 'berenjena', 1.20));
cat.add(new Producto(9, 'puerro', 1.5));
cat.add(new Producto(10, 'rabano', 2));
cat.add(new Producto(11, 'platano', 1.60));
cat.add(new Producto(12, 'cereza', 3));

//   cat.delete(6);
console.log("ff", cat);
// solo llamar a la función buscar, ya que en la función he puesto console log
cat.buscar(7);  
cat.imprimir();

cat.iniciar();