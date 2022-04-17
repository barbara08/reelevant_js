
//carrito de la compra.pdf

class Producto {
    constructor(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    print() {
        console.log(this.codigo, this.descripcion, this.precio);
    }
}
class Catalogo {
    constructor() {
        this.productos = [];
    }
        add(producto) {    //includes no sirve
            if (!this.productos.some(element => element.codigo === producto.codigo)) {
                this.productos.push(producto);
            }
        }
        delete(codigo) {   // findeindex
            const pos = this.productos.findIndex(element => element.codigo === codigo);
            if (pos >= 0) {                     // if pos >=0 
                this.productos.splice(pos, 1);  //remove 1 items: 
            }
        }
        buscar(code) { // filter => siempre devuelve array 
            const result = this.productos.filter(element => element.codigo === code);
            let retorno = false;
            if (result.length === 0) {  //para comprobar que el array está vacío
                console.log("NO hay coincidencia");
            } else {
                retorno = result[0];
                console.log("SI hay coincidencia", result);
            }
            return retorno;
        }
        imprimir() {
            for(let element of this.productos){
                element.print();
            }
        }
}

class Carrito {
    constructor(catalogo) {
        this.catalogo = catalogo;
        this.array_carrito = [];
        /* formato de array carrito
        [ 
            [codigo, cantidad],
            [cod1, cant1],
        ]
        */
    }
    empty(){ //: vaciar el carrito.
        this.array_carrito = [];
    }
    add(codigo, cantidad){  //: añadir un producto al carrito especificado su código y la cantidad.
        // Si el producto ya está en el carrito, 
        // añadirá la cantidad especificada a la existente.
            // Validar que el código de producto existe en el catálogo.
        let found = undefined;
        for (let index in this.array_carrito){
            console.log(index); // [11,5]
            //if (index[0] == codigo){
            if (this.array_carrito[index][0] === codigo){
                found = index;
                break;
            }
        }
        if (found === undefined){
            // miro en el catalogo
            let producto = this.catalogo.buscar(codigo);
            if (producto === false){
                // no hacemos nada, porque el producto no existe en el catologo
                // y el mensaje de error lo da el metodo buscar() de la clase catalogo
            }else{
                // se ha encontrado el producto en el catologo
                this.array_carrito.push([codigo, cantidad]);
            }
        }else{
            // incremento cantidad
            this.array_carrito[found][1] += cantidad;
        }
    }
    delete(codigo){ //: eliminar completamente un producto del carrito especificando su código.
             // Validar que el código de producto existe en el carrito.
        found = undefined;
        for (index in this.array_carrito){
            if (this.array_carrito[index][0] === codigo){
                found = index;
                break;
            }
        }
        if (found !== undefined){
            this.array_carrito.splice(found, 1);
        }
    }
    update(codigo, cantidad){ //: actualizar la cantidad de un producto del carrito a un valor dado. Es decir, la
                //cantidad especificada sustituirá la existente en el carrito para ese producto. 
        found = undefined;  
        for (index in this.array_carrito){
            if (this.array_carrito[index][0] === codigo){
                this.array_carrito[index][1] = cantidad;
            }
        }
    }
    up(codigo){ //: aumentar en una unidad la cantidad de un producto en el carrito.
        let aumentar = 1; 
        for (let element of this.array_carrito){
            if(this.array_carrito[element][0] === codigo){
                this.array_carrito[element][1] += aumentar;
            }
        }
    }
    down(codigo){ //: disminuir en una unidad la cantidad de un producto en el carrito. Validar que la
            // cantidad no resulte negativa. Si es cero se eliminará el producto del carrito.
        let disminuir = 1; 
        for (let element of this.array_carrito){
            if(this.array_carrito[element][0] === codigo){
                if (this.array_carrito[element][1] <= 0){
                    this.delete(codigo);  
                }else {
                this.array_carrito[element][1] -= disminuir;
                }  
            }
        }
    }
    items(){ //: calcular el número de productos diferentes del carrito.
        //return this.array_carrito.length;
        let resultado = 0;
        for(let index = 1; index <= this.array_carrito.length; index++){
            resultado = resultado + index;
        } 
    }
    total(){ //: calcular el total de la compra.
        let totalCompra = 0;
        for(let element of this.array_carrito){
            totalCompra += this.cantidad*this.producto.precio;
        }
        return totalCompra;
    }
    list(){ //: listar por consola el contenido del carrito, mostrando código, descripción,
            // cantidad, precio e importe. Se añadirá una última línea con el total del carrito.
            console.log("listando....");
            for(let element of this.array_carrito){
                let codigo = element[0];
                let p=this.catalogo.buscar(codigo);
                console.log("-------------");
                console.log("p = ", p);
                console.log("-------------");
                let descr = p.descripcion;
                let cantidad = element[1];
                let precio = p.precio;
                let importe = cantidad * precio;
                console.log("Codigo: ", codigo, "descripción: ", descr, "cantidad: ", cantidad, "precio: ", precio,  "importe: " , importe);
            }
            //console.log("Codigo: ",  "descripción: ",  "cantidad: ",  "precio: ",  "importe: ");
    }
}

//const producto1 = new Producto(1, "Tomate", 5);
//cat.add (producto1);

const cat = new Catalogo();
//añadir producto al catalogo
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

console.log("Catálogo: ", cat);
//cat.delete(6);
//cat.buscar(7);
//cat.imprimir();

const carrito = new Carrito(cat);
//añadir al carrito productos que hay dentro del catalogo
console.log("agrego códgio 13");
carrito.add(11, 5);
carrito.add(12, 5);
carrito.add(2, 5);
console.log("listo el contenido de mi carrito");
carrito.list();
carrito.delete(2);
console.log("quito un elemento del codigo 12");
carrito.down(12);
console.log("listo el contenido de mi carrito");
carrito.list();
