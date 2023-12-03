/*
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

*/

// Creamos un array con los regalos
const gifts = ['tren', 'oso', 'pelota'];
// Creamos una cadena de texto con cada material
const materials = 'tronesa';

// Creamos una función para comprobar cuales de los regalos se pueden construir con los materiales proporcionados
function manufacture(gifts, materials) {
    // Creamos un array para guardar los regalos que se puedan construir
    let giftsManufactured = [];

    // Recorremos cada regalo
    gifts.forEach(gift => {
        // Verificamos si todos los caracteres del regalo están presentes en los materiales
        if (gift.split('').every(char => materials.includes(char))) {
            // Si lo están añadimos el regalo al array de regalos construidos
            giftsManufactured.push(gift);
        }
    });

    // Devolvemos el array de regalos construidos
    return giftsManufactured;
}

// Llamamos a la función pasandole el array de regalos y la cadena ded texto con los materiales disponibles
console.log(manufacture(gifts, materials));
