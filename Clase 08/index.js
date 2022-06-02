// Realizar un proyecto de servidor basado en node.js y express
// Que ofrezca una API RESTful de productos

// import express from 'express';
// import productosRouter from './routes/productos.js';

// Creates express app
const express = require('express');
const app = express();
const PORT = 8080;
const productosRouter = require('./routes/productos')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('/public'));

const fs = require('fs');

app.use('/', productosRouter);

// Listen to PORT ------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});