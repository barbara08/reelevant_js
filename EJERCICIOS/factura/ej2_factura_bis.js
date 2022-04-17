class Client{
    name = "";
    adress = "";
    phone = "";
    nif = "";

    constructor(nombre, direccion, telf, cif){
        this.name = nombre;
        this.adress = direccion;
        this.phone = telf;
        this.nif = cif;
    }
}

class LineInvoice{
    description = "";
    price = 0.0;
    count = 0;

    constructor(descripcion, precio, cantidad){
        this.description = descripcion;
        this.price = precio;
        this.count = cantidad;
    }
}


class Invoice{
    iva = 0.21;
    client = undefined;
    lines_of_invoice = [];

    constructor(cliente, lista_de_productos){
        this.client = cliente;
        this.lines_of_invoice = lista_de_productos;
    }

    total(){
        let bi = 0;
        for (let line in this.lines_of_invoice) {
            // console.log(line, this.lines_of_invoice[line]);
            bi += this.lines_of_invoice[line].price * this.lines_of_invoice[line].count;
        }
        return (bi * this.iva) + bi;
    }

    print_ticket(){
        console.log("-----------------");
        // info del cliente
        console.log("nombre: ", this.client.name);
        console.log("dirección. ", this.client.adress);
        console.log("-----------------")
        // productos
        for(let line in this.lines_of_invoice){
            
            console.log("productos: \n", parseInt(line) + 1, this.lines_of_invoice[line].description, 
                                            this.lines_of_invoice[line].price, 
                                            this.lines_of_invoice[line].count,
                                            this.lines_of_invoice[line].price * this.lines_of_invoice[line].count);
        }
        console.log("-----------------");
        // total
        console.log("total", this.total());  
        console.log("-----------------");
    }
}

// definimos el cliente
let cliente_pepe = new Client("pepe", "C/aqui", 123, "123b");
let cliente_paco = new Client("Paco", "C/alli", 213, "537R");

// declaramos "el carrito de la compra"
let lista_producto_pepe = [];
let lista_producto_paco = [];

// definimos el producto
let leche_pepe = new LineInvoice("Leche", 0.75, 6);
// añadimos el producto al carrito
lista_producto_pepe.push(leche_pepe);
// definimos otro producto
let azucar_pepe = new LineInvoice("Azucar", 0.36, 2);
// lo añadimos al carrito
lista_producto_pepe.push(azucar_pepe);

let azucar_paco = new LineInvoice("Azucar", 0.36, 1);
lista_producto_paco.push(azucar_paco);

// creamos la factura del cliente
let factura_pepe = new Invoice(cliente_pepe, lista_producto_pepe);
console.log("Total factura: ", factura_pepe.total());
factura_pepe.print_ticket();

