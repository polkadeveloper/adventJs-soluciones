// Creamos un array con los regalos
const gifts2: string[] = ['tren', 'oso', 'pelota'];
// Creamos una cadena de texto con cada material
const materials2: string = 'tronesa';

// Creamos una función para comprobar cuales de los regalos se pueden construir con los materiales proporcionados
function manufacture2(gifts2: string[], materials2: string): string[] {
    // Creamos un array para guardar los regalos que se puedan construir
    let giftsManufactured: string[] = [];

    // Recorremos cada regalo
    gifts2.forEach(gift => {
        // Verificamos si todos los caracteres del regalo están presentes en los materiales
        if (gift.split('').every(char => materials2.includes(char))) {
            // Si lo están añadimos el regalo al array de regalos construidos
            giftsManufactured.push(gift);
        }
    });

    // Devolvemos el array de regalos construidos
    return giftsManufactured;
}

// Llamamos a la función pasándole el array de regalos y la cadena de texto con los materiales disponibles
console.log(manufacture2(gifts2, materials2));
