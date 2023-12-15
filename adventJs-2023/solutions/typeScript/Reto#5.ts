/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

-> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars.

*/

let road1 = 'S..|...|..'
let time1 = 10 // unidades de tiempo

function cyberReindeer2(road: string, time: number): string[] {
    // Creamos un array con el estado inicial de la carretera
    let roadStates: string[] = [road];
    // Creamos una variable para saber la posición del trineo
    let posicionTrineo: number = road.indexOf("S");
    // Creamos una variable para saber el caracter actual del trineo
    let caracterActual: string = ".";

    // Creamos un bucle para simular el movimiento del trineo
    // en cada iteración del bucle, creamos una nueva carretera
    // y la añadimos al array de movimientos
    // Empezamos en 1 porque ya tenemos el estado inicial
    for (let i: number = 1; i < time; i++) {
        // Si la iteración sobre la cantidad de tiempo es igual a 5
        // cambiamos todas las barreras cerradas por abiertas
        // Usamos una regexp para reemplazar todas las barreras
        if (i === 5) road = road.replace(/\|/g, "*");

        // Utilizamos una regexp para obtener el caracter posterior al trineo
        // y reemplazar el caracter actual y el trineo
        const newRoad: string = road.replace(/S[\.\*]/, `${caracterActual}S`);

        // Si la nueva carretera es diferente a la carretera anterior
        // significa que el trineo se ha movido
        // por lo que aumentamos la posición del trineo
        // y actualizamos el caracter actual
        if (newRoad !== road) {
            posicionTrineo++;
            // El caracter actual es el caracter posterior al trineo
            // ya que en este punto la carretera no se ha actualizado
            caracterActual = road[posicionTrineo];
        }

        // Actualizamos la carretera
        road = newRoad;
        // Añadimos la carretera al array de estados
        roadStates.push(road);
    }

    return roadStates;
}

console.log(cyberReindeer2(road1, time1));