/*
Mantener un array donde tengamos una lista de especies de animales y 
el número de patas que tiene cada uno. Crear una función que calcule un número aleatorio entre 1 y 100
para cada tipo de animal, de tal modo que devuelva finalmente el número de patas que hay en la granja.
*/

const animales = [
    {
        nombre: "patos",
        patas: 2,
        unidades: random(),
    },
    {
        nombre: "cerdos",
        patas: 4,
        unidades: random(),
    },
    {
        nombre: "cabras",
        patas: 4,
        unidades: random(),
    },
    {
        nombre: "jirafas",
        patas: 4,
        unidades: random(),
    }
];
console.log(animales);

function random() {
    return Math.floor(Math.random() * 100);
}
for (i = 0; i < animales.length; i++) {
    let total_patas = animales[i].patas * animales[i].unidades;
    console.log("Hay un total de ", animales[i].unidades, animales[i].nombre, " y tiene ", total_patas, " patas");
}

