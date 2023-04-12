const dataBase = require('./dataBase');

function agregar(id, nombre, descripcion, categoria, precio){
    const nuevoproducto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria,
        precio: precio,
    };
    productos.push(nuevoproducto);
    console.log("Nuevo Producto: ");
    console.log(nuevoproducto)
}