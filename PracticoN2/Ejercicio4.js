// Trabajo Practico N° 2 - Ejercicio 4 - Tomas Alejo Sanhueza

function multiplicar(numero){
    return numero * 23;
}

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

console.log("El numero",numeroRandom, "multiplicado por 23 es = ",multiplicar(numeroRandom));