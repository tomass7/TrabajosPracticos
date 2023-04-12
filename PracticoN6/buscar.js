const dataBase = require('./dataBase');

//Punto 1
function buscarProdID(id) {
    for (let i = 0; i < dataBase.length; i++){
        if (dataBase [i].id === id) {
            return dataBase[i];
        }
    }
return null;
}

function MenorPrecio(prod, preciolow) {
    const productosFiltrados = prod.filter((prod) => prod.precio < preciolow);
    return productosFiltrados
}

const producto = buscarProdID("./dataBase.js");
console.log(producto)