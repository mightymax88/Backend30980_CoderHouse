const express = require('express');
const app = express();
const PORT = 8080;
const { engine } = require('express-handlebars');
const productos = require('./routes/productos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine()); //Motor de plantilla
app.set('view engine', 'handlebars'); //Registra el motor de plantillas
app.set('views', './views'); //Especifica carpeta de plantillas

app.use('/productos', productos);

app.get('/', (req, res) => {
    res.send({mensaje: 'Desafío Clase 10 - M FILIPUZZI'})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});