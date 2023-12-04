/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified 
que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o 
eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía

*/

const original = 'stepfor';
const modified = 'stepor';

function findNaughtyStep(original, modified) {
    // Determina cuál cadena es más larga
    const longerString = original.length > modified.length ? original : modified;
    const shorterString = original.length > modified.length ? modified : original;

    // Itera sobre los caracteres de la cadena más larga
    for (let i = 0; i < longerString.length; i++) {
        // Compara el caracter actual en la cadena más larga con el correspondiente en la más corta
        if (longerString[i] !== (shorterString[i] || '')) {
            // Si son diferentes, devuelve el caracter de la cadena más larga en esa posición
            return longerString[i];
        }
    }

    // Si no se encontraron diferencias, devuelve una cadena vacía
    return '';
}


// Llama a la función con las cadenas originales y modificadas e imprime el resultado
console.log(findNaughtyStep(original, modified)); // 'f'
