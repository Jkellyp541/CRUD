//Filter
const animalitos = [
    { nombre: "carlitos", especie: "conejo" },    // 0
    { nombre: "esteban", especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita", especie: "gato" },      // 3
    { nombre: "miranda", especie: "conejo" },    // 4
    { nombre: "lucas", especie: "conejo" },    // 5
    { nombre: "Horacia", especie: "tortuga" }    // 6
    ];

let conejitos = animalitos.filter((data) => data.especie === "conejo");

console.log(conejitos);

console.log("");

//Map
const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];

let nombreMascotas = mascotas.map((data) => `Nombre de las mascotas: ${data.nombre}`);

console.log(nombreMascotas);

