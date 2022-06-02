const router = require('express').Router();
let productos = [];
const multer = require('multer');

const fs = require('fs');
const path = require('path');

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

// Storage ----------------------------------------------------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        const filename = `${Date.now()} - ${file.originalname}`;
        cb(null, filename);
    }
});
const fileUpload = multer({storage});

router.post('/upload', fileUpload.single('archivo'), (req, res) => {
    const file = req.file;
    console.log("file: ", file);
    
    if(!file) {
        return res.status(400).send("Error subiendo el archivo");
    }

    res.status(200).send(`Archivo <b>${file.filename} </b> subido correctamente`);
});

router.get('/upload', (req, res) => {
    let reqPath = path.join(__dirname, '../');
    res.sendFile(reqPath + '/public/up.html');
})

// Routes ----------------------------------------------------------------------
router.get('/', (req, res) => {
    res.send({mensaje: 'Desafío Clase 8 - M FILIPUZZI'})
})

router.get('/api', (req, res) => {
    res.send({mensaje: '/api/productos -> See all products in file'})
})

// GET '/api/productosFile' -> devuelve el archivo
router.get('/api/productosFile', function(req,res){
    let reqPath = path.join(__dirname, '../');
    res.sendFile(reqPath + '/productos.txt')
});

// GET '/api/productos' -> devuelve todos los productos
router.get('/api/productos', (req, res) => {
    let obj=test.getAll();
    res.json(obj)
})

// GET '/api/productos/:id' -> devuelve un producto por id
router.get('/api/productos/:id', (req, res) => {
    const idn = parseInt(req.params.id);
    let robj=test.getById(idn);
    res.status(200).json(robj);
});

// POST '/productos' -> recibe y agrega un producto, y lo devuelve con su id
router.get('/productos', (req, res) => {
    let reqPath = path.join(__dirname, '../');
    res.sendFile(reqPath + '/public/index.html');
})

router.post('/api/productos', (req, res) => {
    // console.log(req.body);
    const { title, price, thumbnail } = req.body;
    let cant = productos.length;
    productos.push({ 'title':title, 'price':price, 'thumbnail':thumbnail , 'id':cant+1});
    fs.writeFileSync(nombreDelArchivo,JSON.stringify(productos));
    res.json(productos[cant]);
});

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id
router.put('/api/productos/:id', function(req,res){
    const idn = parseInt(req.params.id);
    let obj=test.getAll();
    for (let x in obj){
        if(obj[x].id == idn){
            obj[x].title = "New product";
        }
    }
    fs.writeFileSync(nombreDelArchivo,JSON.stringify(obj))
    res.status(200).send("Producto actualizado");
});

// DELETE '/api/productos/:id' -> elimina el producto x id
router.delete('/api/productos/:id', (req, res) => {
    const idn = parseInt(req.params.id);
    if(isNaN(idn)) {
        return res.status(400).json({error: 'El parametro no es númerico'});
    }
    // let obj=test.getAll();
    // if(idn < 0 || idn > obj.length) {
    //     return res.status(400).json({error: 'El parametro está fuera del rango'});
    // }
    test.deleteById(idn);
    res.status(200).send("Producto eliminado");
});

module.exports = router;