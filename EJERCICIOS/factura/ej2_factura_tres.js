/*
Ejercicio para hoy. Si podéis ir avanzando en la solución eso que llevamos avanzado
Necesitamos una clase Factura que mantenga los siguientes datos:
- Nombre y apellidos
- NIF/CIF
- Líneas de factura
La clase nos permitirá las siguientes acciones:
- Al crear la factura se pedirá el nombre del cliente y el nif
- Añadir linea de factura especificando concepto, precio en euros y cantidad
- Calcular total de la factura, especificando el porcentaje de impuestos a aplicar
- Imprimir factura: listar cada linea de factura calculando el importe de línea finalmente imprimir el total.
Crearemos una clase derivada de factura que nos convierta los precios a dolares, tanto al calcular 
como al imprimir cada línea de la factura. Tratar de usar los conceptos de herencia y la 
palabra reservada "super" cuando sea necesario. La clase derivada facturaDolares debería tener muy poco código. */



  class LineInvoice{
       constructor(concepto, precio, cantidad){
        this.concept = concepto;
        this.price = precio;
        this.count = cantidad;   
    }
    importe(){
      let total_importe_linea = this.count * this.price;
    }
}
class Invoice {   //usar super
    constructor(nombre_apellido, cif){
      this.name_surname = nombre_apellido;
      this.cif = cif;
      this.line_invoice = [];
      
    }
    add (linea) {        
        this.line_invoice.push(linea);
     }
     BI(){
       let iva = 0.21;
       importe_total = importe()*iva;
     }
}



//let cliente1 = new Invoice("pepe ruiz", "123456789-B");
//let cliente2 = new Invoice("luis lopez", "123456789-B");
//new Invoice("pepe ruiz", "123456789-B");

const factura1 = new Invoice("pepe","123456789");
factura1.add (new LineInvoice("cocacola",3,1.5));
factura1.add (new LineInvoice("galletas",2,3.0));
let azucar = new LineInvoice("azucar",2,3.0);
factura1.add(azucar); 
factura1.add (new LineInvoice("jamón",5,5.0));

console.log(factura1);






/* teoria

padre 
contructor (a,b)    quitamos estos parámetros
this.a = a;    
this.b =b;
hija
contructor (a,b,c)
super(a,b)         // super solo llama al contructor
this. 

*/