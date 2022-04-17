/*
-Crea una clase que llamaremos Bus. Sus atributos serán:
-capacidad: número máximo de pasajeros
-pasajeros: número de pasajeros (inicialmente 0)
-conductor: objeto conductor.
-Sus métodos
-subir(pasajeros): aumenta el numero de pasajeros
-bajar(pasajaeros): disminuye el número de pasajeros
-conductor: asigna un objeto conductor.
-El ojeto conductor es de una clase (Conductor) cuyos atributos son:
-nombre: nombre del conductor
-licencia: un número que identifica al condcutor.
-Al crear el objeto se asigna también el conductor
-No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

*/
/*
class Bus {
    constructor(matricula, capacidad){
        this.matricula = matricula;
        this.capacidad = capacidad;
        this.pasajeros = 0;
    }
    subir(pasajeros){
        this.pasajeros += pasajeros;;
    }
}
*/

function bus (capacidad,conductor) {
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;
//    this asignar_bus =                  // hemos añadido esto al ejercicio, de cuando el conductor está en el bus
  //  this.conductor.bus = this;   // hemos añadido esto al ejercicio, de cuando el conductor está en el bus
    this.subir = function (pasajeros){
        //this.pasajeros es de la clase y el de al lado sin this es el parametro (le ha puesto el mismo nombre)
        if(this.pasajeros + pasajeros < capacidad){
            this.pasajeros += pasajeros;
        }
    this.bajar = function (pasajeros){
        //this.pasajeros es de la clase y el de al lado sin this es el parametro (le ha puesto el mismo nombre)
        this.pasajeros -= pasajeros;
        if(this.pasajeros + pasajeros >=0){   
            }
        }
    // lo hemos añadido al ejercicio
    this.cambiar_conductor = function (conductor){
       this.conductor.bus = null;
       this.conductor = conductor;
       this.conductor.bus = this;

   }   

}
    }


function conductor(nombre,licencia) {
    this.nombre = nombre;
    this.licencia =licencia;
    
}