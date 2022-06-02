// Realizar un proyecto de servidor basado en node.js y express
// Que ofrezca una API RESTful de productos
// GET '/api/productos' -> devuelve todos los productos
// GET '/api/productos/:id' -> devuelve un producto por id
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id
// DELETE '/api/productos/:id' -> elimina el producto x id

const express = require('express')
const {Router} = express
const app = express()
const router = Router()

const fs = require('fs');

router.get('/recurso', (req, res) => {
    res.send('teg ok')
})

router.post('recurso', (req, res) => {
    res.send('post ok')
})

app.use('/api', router)
app.use(express.static('public'))

app.listen(8080)