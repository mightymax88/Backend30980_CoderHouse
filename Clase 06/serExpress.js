const express = require('express');
const app = express();

const fs = require('fs');


const PORT = 8080

// Code from the last Class 04 -----------------------------------------------------
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
}
let test = new Contenedor();
// Ending Class 04 -----------------------------------------------------------------

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({mensaje: 'Desafío Clase 6 - Servidor con express (M FILIPUZZI)'})
})

app.get('/fecha', (req, res) => {
    res.sendFile(__dirname + "/fyh.txt")
})

// Ruta get /productos que devuelva un array con todos los productos disponibles en el servidor
app.get('/productosAll', (req, res) => {
    res.sendFile(__dirname + "/productos.txt")
})

app.get('/productos', (req, res) => {
    let obj=test.getAll();
    res.json(obj)
})

// Ruta get /productoRandom que devuelva un producto elegido al azar
app.get('/productoRandom', (req, res) => {
    let max=4;
    let min=1;
    let idn = Math.floor(Math.random() * (max - min) + min);
    let robj=test.getById(idn);
    // console.log(robj);
    // let resu = JSON.stringify(robj);
    res.json(robj);
})