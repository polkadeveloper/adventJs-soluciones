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

const original2 = 'stepfor';
const modified2 = 'stepor';

function findNaughtyStep2(original2: string, modified2: string): string {
    // Determina cuál cadena es más larga
    const longerString: string = original2.length > modified2.length ? original2 : modified2;
    const shorterString: string = original2.length > modified2.length ? modified2 : original2;

    // Itera sobre los caracteres de la cadena más larga
    for (let i: number = 0; i < longerString.length; i++) {
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
console.log(findNaughtyStep2(original2, modified2)); // 'f'
