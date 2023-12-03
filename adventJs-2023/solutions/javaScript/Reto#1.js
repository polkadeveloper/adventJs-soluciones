/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.

Si no hay números repetidos, devuelve -1.
*/

// Creamos el array con los ids de los regalos
const gifts = [12, 20, 30, 11, 20, 12]

// Creamos una función para buscar el primer id repetido
function firstRepeatedId(gifts) {
    // Por defecto el id es -1
    let repeatedId = -1;
    // Creamos un conjunto para almacenar los ids de los regalos
    let idSet = new Set();

    // Recorremos todos los elementos del array de regalos
    for (let i = 0; i < gifts.length; i++) {
        // Guardamos el id actual en una variable
        let idActual = gifts[i];

        // Comprobamos si en el conjunto está el id actual
        if (idSet.has(idActual)) {
            // En el caso de que así sea sobreescribimos la variable de id repetida con el valor del id actual
            // Terminamos con un break
            repeatedId = idActual;
            break; 
        }

        // Si no está en el conjunto añadimos el id actual
        // Si encontramos más adelante el mismo número en nuestros regalos la condición dará verdadera
        idSet.add(idActual);
    }

    // Devolvemos el id repetido
    return repeatedId;
}

// Llamamos a la función pasandole el array de regalos
console.log(firstRepeatedId(gifts));
