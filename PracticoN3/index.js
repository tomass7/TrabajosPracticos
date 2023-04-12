// Trabajo Pracico N3
const readlineSync = require("readline-sync");


//1
console.log(":::::Ejercicio 1:::::");

const palabra = readlineSync.question("Introduce una palabra: ");
for (let i = 0; i <= 10; i++){
    console.log(palabra)
}

//2
console.log("\n:::::Ejercicio 2:::::");

const edad = readlineSync.question("Introduce tu edad: ");

for (let i = 1; i <= edad; i++){
    console.log("Tu edad desde que nacio hasta hoy:" + i)
}

//3
console.log("\n:::::Ejercicio 3:::::");

const num = readlineSync.question("Introduce un numero entero positivo:")
let impar = "";

for (let i = 1 ; i <= num; i++) {
    if (i % 2 !== 0) {
        impar += i;
        if (i !== num ) {
        impar += ",";
        }
    }
}

console.log("Los numeros impares desde 1 hasta " + num + " son: " + impar)


//4
console.log("\n:::::Ejercicio 4:::::");

const triangulo = readlineSync.question("Ingrese un numero entero: ")

for (let i = 1; i <= triangulo; i++){
    let linea = "";
    for (let j = 1; j <= i; j++){
        linea += "*";
    }
    
    console.log(linea);
}


//5
console.log("\n:::::Ejercicio 5:::::");

const word = readlineSync.question("Introduce una palabra: ")

for (let i = word.length - 1; i >= 0; i--){
    console.log(word[i]);
}