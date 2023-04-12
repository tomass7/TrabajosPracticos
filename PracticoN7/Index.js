//1
console.log("\n ---EJ 1---")

function contrasenaValida(string){
    return string === '2Fj(jjbFsuj' || string === 'eoZiugBf&g9'
}

// codigo de prueba
console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));
console.log(contrasenaValida(""));

//2
console.log("\n ---EJ 2---")

function calcularImpuestos(edad,ingresos){
    if ( edad >= 18 && ingresos >= 1000){
        return ingresos * 0.4;
    }else {
        return 0;
    }
}

// codigo de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0

//3
console.log("\n ---EJ 3---")

function bmi(peso, altura){
    const bmi = peso / Math.pow(altura, 2);
    if (bmi < 18.5){
        return 'Bajo de Peso'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal'
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Sobrepreso'
    }else if (bmi >= 30){
        return 'Obeso'
    }
}
//codigo de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"

//4
console.log("\n ---EJ 4---")
function imprimirArreglo(...arreglo){
    for (let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));

//5
console.log("\n ---EJ 5---")

function likes(numero){
    if (numero >= 1000000) {
        return (numero / 1000000).toFixed(0) + 'M';
    }else if (numero >= 1000){
        return (numero / 1000).toFixed(0) + 'K';
    }else {
        return numero.toString();
    }
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"

//6
console.log("\n ---EJ 6---")

function fizzBuzz(numero){
    if (numero % 3 === 0 && numero % 5 === 0){
        return 'fizzbuzz'
    } else if (numero % 5 === 0){
        return 'buzz'
    }else if (numero % 3 === 0) {
        return 'fizz'
    }else {
        return numero.toString();
    }

}

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

//7
console.log("\n ---EJ 7---")

function contarRango(num1,num2){
    let contador = 0;
    for (let i = num1 + 1; i < num2; i++){
        contador++;
    }
    return contador;
}
// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

//8
console.log("\n ---EJ 8---")

function sumarRango(numIN,numFN){
    let suma = 0;
    for (let i = numIN; i <= numFN; i++){
        suma += i;
    }
    return suma;
}
// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0

//9
console.log("\n ---EJ 9---")

function numeroDeAes(chain) {
    let count = 0;
    for (let i=0; i < chain.length; i++) {
        if(chain.charAt(i)==="a") {
            count++;
        }
    }
return count;
}
// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0

//10
console.log("\n ---EJ 10---")

function numeroDeCaracteres (chain, caracter) {
    let count = 0;
    for (let i=0; i < chain.length; i++) {
        if(chain.charAt(i) === caracter){
            count++;
        }
    }
    return count;
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", 'e')); // 4

//11
console.log("\n ---EJ 11---")

function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0 ; i< arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

// código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0

//12
console.log("\n ---EJ 12---")

function multiplicarArreglo(arreglo) {
    let mult = 1;
    for (let i = 0 ; i < arreglo.length; i++){
        mult *= arreglo[i];
    }
    return mult;
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1

//13
console.log("\n ---EJ 13---")
function removerCeros (arreglo) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++){
        if(arreglo[i] !== 0){
            nuevoArreglo.push(arreglo[i]);
        }
    }
    return nuevoArreglo;
}

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []

//14
console.log("\n ---EJ 14---")
function sumarArreglo (arreglo, posINC, posFIN) {
    let suma = 0;
    for (let i = posINC; i <= posFIN; i++){
        suma += arreglo[i];
    }
    return suma;
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 7

//15
console.log("\n ---EJ 15---")

function transcribir (candADN) {
    let complementoARN = "";
    for(let i = 0; i < candADN.length; i++){
        switch (candADN[i]) {
            case "G":
                complementoARN += 'C';
                break;
            case "C":
                complementoARN += 'G';
                break;
            case "T":
                complementoARN += 'A';
                break;
            case "A":
                complementoARN += 'U';
                break;
            default:
                break;
        }
    }
    return complementoARN
}

// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

//16
console.log("\n ---EJ 16---")

function capitalizar (capi) {
    return capi.charAt(0).toUpperCase() + capi.slice(1)
}

// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

//17
console.log("\n ---EJ 17---")

function capitalizar (cadena) {
    let palabras = cadena.split(" ");
    for (let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ")
}
// código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""

//18
console.log("\n ---EJ 18---")

function max (arreglo) {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}

// código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9

//19
console.log("\n ---EJ 19---")

function min (arreglo) {
    let min = arreglo[0];
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] < min) {
            min = arreglo[i]
        }
    }
    return min;
}

// código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2

//20
console.log("\n ---EJ 20---")

function password(contrasena) {
    let nuevaContrasena = contrasena.toLowerCase().replace(/\s/g, '').replace(/a/g, '4'). replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0');
    return nuevaContrasena;
}

// código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""

//21
console.log("\n ---EJ 21---")

function pares(numpar) {
    let pares = [];
    for (let i = 0; i < numpar.length; i++) {
        if (numpar[i] % 2 === 0) {
            pares.push(numpar[i]);
        }
    }
    return pares;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []

//22
console.log("\n ---EJ 22---")

function posiciones(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []

//23
console.log("\n ---EJ 23---")
function duplicar(numeros) {
    let numerosDuplicados = [];
    for (let i = 0; i < numeros.length; i++) {
      numerosDuplicados.push(numeros[i] * 2);
    }
    return numerosDuplicados;
  }

// código de prueba
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []

//24
console.log("\n ---EJ 24---")

function empiezanConA (palabras){
    return palabras.filter(word => word.toLowerCase().startsWith('a'));
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []

//25
console.log("\n ---EJ 25---")

function terminanConS (palabras){
    return palabras.filter(word => word.toLowerCase().endsWith('s'))
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []

//26
console.log("\n ---EJ 26---")

function imprimirMatriz (matriz) {
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            console.log(matriz[i][j])
        }
    }
}
// código de prueba
console.log(
    imprimirMatriz([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );
  
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9

//27
console.log("\n ---EJ 27---")

function numerosAPalabras (numeros){
    const palabras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    return numeros.map(num => palabras[num])
}
// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]

//28
console.log("\n ---EJ 28---")

function palabrasANumeros (palabras) {
    const numeros = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    return palabras.map(palabras => {
        const indice = numeros.indexOf(palabras);
        return indice ===  -1 ? -1 : indice;
    });
}

// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]); // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]); // [5, 6, 7, 8, 9]\

//29
console.log("\n ---EJ 29---")

function numAsteriscos (arreglo){
    let count = 0;
    for (let i=0; i < arreglo.length; i++){
        if(typeof arreglo[i] === 'string') {
            count += (arreglo[i].match(/\*/g) || []).length;
        }
    }
    return count;
}

// Ejemplo de uso:
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
console.log(numAsteriscos([])); // 0

//30
console.log("\n ---EJ 30---")

function numAsteriscos (matriz) {
    let num = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz.length; j++){
            if (matriz[i][j] === '*'){
                num++;
            }
        }
    }
    return num;
}

// código de prueba
console.log(
    numAsteriscos([
      ["*", "", "*"],
      ["", "*", ""],
      ["*", "", "*"],
    ])
  );
  // 5

//31
console.log("\n ---EJ 31---")

function distancia (arr1,arr2) {
    let distancia = 0;
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            distancia++;
        }
    } 
    return distancia; 
}

// código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 2

