//Crear array de 10 elementos sin inicializar y llamarlo numeros
const numeros = new Array(10)

//Inicializar con números aleatorios entre 0 y 1000, redondeados a 2 decimales
for (let i = 0; i < numeros.length; i++) {

    numeros[i] = Math.round(Math.random() * 1000 * 100) / 100;

}

//Imprimir todos los elementos usando un bucle
for (let i = 0; i < numeros.length; i++) {

    console.log(`Posición ${i}: ${numeros[i]}`);

}

//Encontrar el número mayor y menor y sus posiciones
let mayor = numeros[0];
let menor = numeros[0];
let posMayor = 0;
let posMenor = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
        posMayor = i;
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
        posMenor = i;
    }
}

console.log(`Número mayor: ${mayor}, posición: ${posMayor}`);
console.log(`Número menor: ${menor}, posición: ${posMenor}`);

//Eliminar el mayor y el menor del array
if (posMayor > posMenor) {
    numeros.splice(posMayor, 1);
    numeros.splice(posMenor, 1);
} else {
    numeros.splice(posMenor, 1);
    numeros.splice(posMayor, 1);
}

console.log("Array Numeros después de eliminar mayor y menor:");
console.log(numeros);
