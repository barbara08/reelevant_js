const MAX_UNITS = 100;
​
class Animal {
    constructor (nombre,patas) {
        this.nombre = nombre;
        this.patas = patas;
        this.unidades = Animal.random(); 
    }
    static random () {
        return Math.floor(Math.random()*MAX_UNITS)+1;
    }
}
class Granja {
    constructor () {
        this.animales = [];
    }
    add (animal) {
        this.animales.push (animal);
    }
    totalPatas () {
        return this.animales.reduce ((total,item)=>total+item.unidades*item.patas,0);
        // let total = 0;
        // for (let item of animales) {
        //     total += item.unidades*item.patas;
        // }
        // return total;
    }
    list () {
        this.animales.forEach ((item)=>console.log (`Hay ${item.unidades} ${item.nombre} con ${item.unidades*item.patas}`));
        console.log (`Hay ${this.totalPatas()} patas`);
    }
}
​
const granja = new Granja();
granja.add (new Animal('perro',4));
granja.add (new Animal('pato',2));
granja.add (new Animal('gallina',2));
granja.list();