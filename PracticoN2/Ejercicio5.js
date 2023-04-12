// Trabajo Practico N° 2 - Ejercicio 5 - Tomas Alejo Sanhueza

let MiLista = []
for (let i=1 ; i<=10; i++){
    const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    MiLista.push(numeroRandom);
}

console.log("Mi lista = "+MiLista);