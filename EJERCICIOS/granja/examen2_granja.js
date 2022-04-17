/*
Mantener un array donde tengamos una lista de especies de animales y 
el número de patas que tiene cada uno. Crear una función que calcule un número aleatorio entre 1 y 100
para cada tipo de animal, de tal modo que devuelva finalmente el número de patas que hay en la granja.
*/
// static

function random() {
  return Math.floor(Math.random() * 100 + 1);
}

class Animal {
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.patas = patas;
    this.unidades = random(); // las unidades pueden ser atributos de Granja
  }

}

class Granja {
  constructor() {   // parámetro vacío para ir añadiendo animales poco a poco
    this.array_animales = [];

  }

  add(animal) {
    this.array_animales.push(animal);
  }

  show(){
    console.log(this.array_animales);
  }

  total_patas(){
    //se pone variable ya que si lo ponemos como atributo solo serviría para este método,
    //si lo queremos usar en varios métodos se pondría this.suma en el constructor. 
    let suma = 0;     
    for(animal of this.array_animales){
      suma += animal.patas * animal.unidades;
    }
  }
  cantidad_animal(){
    for(animal of this.array_animales){
      total_animal = animal.unidades;
    }

  }
}


let patos = new Animal("patos", 4);
let perros = new Animal("perros", 4);

let granja = new Granja();

granja.add(patos);
granja.add(perros);
granja.show();

console.log("Hay un total de ", granja.cantidad_animal(), " y tiene ", granja.total_patas(), " patas");