const dataBase = require('./dataBase');

function listcategoria(categoria) {
    const productosxCategorias = [];

    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].categoria === categoria) {
            productosxCategorias.push(dataBase[i]);
        }
    }
return productosxCategorias;
}
