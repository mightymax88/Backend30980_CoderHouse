const fs = require('fs')
console.clear();
const nombreDelArchivo = 'productos.txt';

class Contenedor {
    static cont = 0;
    constructor(){
    }

    // Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado
    async save(producto){
        try {
            let info = JSON.parse(await fs.promises.readFile(nombreDelArchivo))
            let idF = info.length +1;
            producto.id = idF;
            info.push(producto)
            await fs.promises.appendFile(nombreDelArchivo, JSON.stringify(producto))
            // console.log(obj.length)
            console.log('Producto agregado')
            return idF;
        }
        catch(err){
            console.log('Hubo un error')
        }
    }

    // Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado (sin usar append)
    // También manejo distinto async para que esto no bloquee el hilo de ejecución, como vimos con Hernán
    async new(producto){
        try {
            let info = JSON.parse(await fs.promises.readFile(nombreDelArchivo))
            let idF = info.length +1;
            producto.id = idF;
            info.push(producto)
            await fs.promises.writeFile(nombreDelArchivo, JSON.stringify(info))
            // console.log(obj.length)
            console.log('Producto agregado')
            return 2;
        }
        catch(err){
            console.log('Hubo un error')
        }
    }
    
    // Recibe un id y devuelve el objeto con ese id, o null si no está
    getById(idn){
        let result = null;
        fs.promises.readFile(nombreDelArchivo, 'utf-8')
        .then(contenido => {
            const obj = JSON.parse(contenido);
            for (let x in obj){
                if(obj[x].id == idn){
                    // console.log(obj[x])
                    result = obj[x]
                }
            };
            console.log(result)
            return result
        })
        .catch(err => {
            console.log('Error de lectura', err)
        })
    }
    
    // Devuelve un array con los objectos presentes en el archivo
    getAll(){
        const data = fs.readFileSync(nombreDelArchivo, 'utf-8');
        console.log(data.toString());
        const obj = JSON.parse(data)
        return obj;
    }

    // Devuelve un array con los objectos presentes en el archivo
    getAllTitles(){
        const data = fs.readFileSync(nombreDelArchivo, 'utf-8');
        const obj = JSON.parse(data)
        const arrayDeNombres = obj.map(el => el.title);
        console.log("Array de nombres: ", arrayDeNombres);
    }
    
    // Elimina del archivo el objeto con el id buscado
    deleteById(idn){
        fs.promises.readFile(nombreDelArchivo, 'utf-8')
        .then(contenido => {
            const obj = JSON.parse(contenido)
            let result = [];
            for (let x in obj){
                if(obj[x].id != idn){
                    result.push(obj[x])
                    fs.promises.writeFile(nombreDelArchivo,JSON.stringify(result))
                }
            }
            console.log("Producto eliminado")
        })
        .catch(err => {
            console.log('Error de lectura', err)
        })
    }
    
    // Elimina todos los objectos presentes en el archivo
    deleteAll(){
        let result = [];
        fs.promises.writeFile(nombreDelArchivo,JSON.stringify(result))
        console.log("Todos los productos han sido eliminados")
    }
}

const nuevoProducto = {
    title: "Computadora",
    price: 56,
    thumbnail: "fotito",
    id: null
};



let test = new Contenedor();

// Invocación, se comentan con la intensión de ejecutar solo las deseadas:
//test.getAll();
//test.new(nuevoProducto);
//test.getAllTitles();
//test.getById(3);
//test.deleteById(2);
//test.deleteAll()
// exports.Contenedor;