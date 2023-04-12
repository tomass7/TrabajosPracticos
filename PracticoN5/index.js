// Trabajo Practico Numero 5. Tomas Alejo Sanhueza

//1 
console.log('--Punto 1--')
function UnirArrays (array1, array2) {
    return array1.concat(array2);
}

const array1 = ["Juan", "Dani"];
const array2 = ["Leo", "Monica", "Juliana"];
const arrayUnido = UnirArrays(array1, array2);

console.log(arrayUnido);

//2
console.log(' \n--Punto 2--')
function esVocal(caracter) {
    return caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'
}

console.log(esVocal('a'));
console.log(esVocal('b'));
console.log(esVocal('j'));
console.log(esVocal('o'));
console.log(esVocal('i'));

//3
console.log(' \n --Punto 3--')
function generar_caracteres(n, caracter) {
    return caracter.repeat(n);
}

console.log(generar_caracteres(5,'x'))

//4
console.log(' \n --Punto 4--')
function sumaArreglo(arreglo){
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
return suma
}

const arreglo = [100,20,13,54,10];
console.log(sumaArreglo(arreglo));

//5
console.log(' \n --Punto 5--')
function NumeroMayor(num1, num2, num3){
    if (num1 === num2 && num2 === num3) {
        return "Son Iguales"
    } else {
        const mayor = Math.max(num1,num2,num3);
        return mayor;
    }
}

console.log(NumeroMayor(15,60,10));
console.log(NumeroMayor(4,4,4))