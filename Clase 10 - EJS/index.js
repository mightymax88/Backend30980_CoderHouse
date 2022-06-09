const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'ejs');

// app.use('/productos', productos);

// Mi código --------------------------------------------------------------------
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

// ------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.send({mensaje: 'Desafío Clase 10 EJS - M FILIPUZZI'})
})

app.get('/productos', (req, res) => {
    res.render('pages/index.ejs', {productos});
});

app.post('/productos', (req, res) => {
    productos.push({...req.body});
    res.render('pages/index.ejs', {productos});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});