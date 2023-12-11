/*

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 

las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. 

Tu tarea es escribir una función que tome una cadena de texto y 

revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.

*/


function decode2(message: string): string {
    // Expresión regular para encontrar el contenido dentro de paréntesis
    const regExp = /\([^()]*\)/;

     // Bucle para encontrar y procesar cada coincidencia dentro de paréntesis
    for (let i; (i = regExp.exec(message)); ) {
        // Obtiene la posición de inicio de la coincidencia
        const index = i.index;
        // Obtiene el texto dentro de los paréntesis
        const text = i[0].slice(1, -1);
        // Invierte el texto dentro de los paréntesis
        const reversed = text.split('').reverse().join('');
        // Obtiene la parte del mensaje antes de la coincidencia
        const pre = message.slice(0, index);
        // Obtiene la parte del mensaje después de la coincidencia
        const post = message.slice(index + text.length + 2);

        // Combina las partes del mensaje con el texto invertido
        message = pre + reversed + post;
    }

    // Devuelve el mensaje modificado
    return message;
}

const c2: string = decode2('sa(u(cla)atn)s');
console.log(c2); // Output: santaclaus
