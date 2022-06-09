const fs = require('fs');

// Code from the last Class -----------------------------------------------------
const nombreDelArchivo = 'productos.txt';

class Contenedor {
    static cont = 0;
    constructor(){
    }
    // Recibe un id y devuelve el objeto con ese id, o null si no está
    getById(idn){
        let result = null;
        const data=fs.readFileSync(nombreDelArchivo, 'utf-8')
        const obj = JSON.parse(data);
        for (let x in obj){
            if(obj[x].id == idn){
                // console.log(obj[x])
                result = obj[x]
            }
        };
        // console.log(result)
        return result
    }
    // Devuelve un array con los objectos presentes en el archivo
    getAll(){
        const data = fs.readFileSync(nombreDelArchivo, 'utf-8');
        // console.log(data.toString());
        const obj = JSON.parse(data)
        return obj;
    }
    // Elimina del archivo el objeto con el id buscado
    deleteById(idn){
        const data = fs.readFileSync(nombreDelArchivo, 'utf-8')
        const obj = JSON.parse(data)
        let result = [];
        for (let x in obj){
            if(obj[x].id != idn){
                result.push(obj[x])
            }
        }
        fs.writeFileSync(nombreDelArchivo,JSON.stringify(result))
        console.log("Producto eliminado")
        return
    }
}
let test = new Contenedor();
productos = test.getAll();

// -----------------------------------------------------------------------------

const mostrarProductos = (req, res) => {
    const datos = productos;
    res.render('productos', datos);
}

const agregarProductos = (req, res) => {
    const { title, price, thumbnail } = req.body;
    let cant = productos.length;
    productos.push({ 'title':title, 'price':price, 'thumbnail':thumbnail , 'id':cant+1});
    fs.writeFileSync(nombreDelArchivo,JSON.stringify(productos));
    res.render('productosAdd', productos);
}

module.exports = {
    mostrarProductos,
    agregarProductos,
}