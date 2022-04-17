

function elementos(descripcion,cantidad,precio) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
}

function clientes(nombre,direccion,telefono,nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}
function empresas(nombre,direccion,telefono,cif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
}

function facturas(clientes,elementos,empresas) {
    this.clientes = clientes;
    this.elementos = elementos;
    this.empresas = empresas;
    this.iva = 0.21;
    this.fpago = "contado";
    this.BI = 0;
    this.total = function (){
        let suma = 0;
        this.BI = 0;  // para limpiar la variable para que empiece a 0, porque ya tiene uan cantidad añadida
        for (let item in elementos) {
            console.log("-", item, elementos[item]);
            this.BI += elementos[item].cantidad * elementos[item].precio;
        }
        return this.BI * this.iva;
    }
   
}
let cliente1 = new clientes ("pepe");
let factura1 = new facturas (cliente1,[]);
let cliente2 = new clientes ("luis");
let factura2 = new facturas (cliente2,["mm",5,16]);


console.log("Total de fra es: ", factura2.total());

