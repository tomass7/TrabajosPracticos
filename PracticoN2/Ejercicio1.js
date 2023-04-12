// Trabajo Practico N° 2 - Ejercicio 1 - Tomas Alejo Sanhueza

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
const resto = numeroRandom % 2;

if (resto === 0){
    console.log("El numero es par:", numeroRandom);
} else {
    console.log("El numero es impar:", numeroRandom);
}