const readlineSync = require("readline-sync");

//Trabajo Practico N°4 - Ejercicio 1 - Tomas Alejo Sanhueza

console.log(":::::Ejercicio 1:::::");

const name = readlineSync.question("Por favor escriba su nombre: ");
console.log(`!hola ${name}!`); 


// Trabajo Practico N°4 - Ejercicio 2 - Tomas Alejo Sanhueza

console.log("\n\n:::::Ejercicio 2:::::");

let objeto = [{
    nombre : readlineSync.question("Ingrese su nombre: "),
    apellido : readlineSync.question("Ingrese su apellido: "),
    edad : readlineSync.question("Ingrese su edad: ")
}]

console.log(objeto);

// Trabajo Practico N°4 - Ejercicio 3 - Tomas Alejo Sanhueza
console.log("\n\n:::::Ejercicio 3:::::");

const Lista1 = [7, "Leon", "Perro"]
const Lista2 = [8, "Gato", "Tomas"]

function buscarElementos(Lista1, Lista2) {
    if(Lista1.includes(Lista2) != -1){
        console.log("Elemento encontrado en la posicion:", Lista1.indexOf(Lista2))
    }
}
buscarElementos(Lista1,"Leon")

buscarElementos(Lista2,"Tomas")

// Trabajo Practico N°4 - Ejercicio 4 - Tomas Alejo Sanhueza
console.log("\n\n:::::Ejercicio 4:::::");

const array = [1 , 2 , 3, 4, 5];

const reversed = array.reverse();

console.log(array,"// ---->", reversed);