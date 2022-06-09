const router = require('express').Router();
const { mostrarProductos, agregarProductos } = require('../controllers/productos');

router.get('/', mostrarProductos);
router.post('/', agregarProductos);

module.exports = router