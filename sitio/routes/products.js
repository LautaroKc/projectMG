var express = require('express');
var router = express.Router();

let productController = require('../controllers/productController');
let upLoadMulter = require('../middlewares/upImagesProducts');

//Validaciones
const productoValidator = require('../validations/productoValidator');
const editProductValidator = require('../validations/editProductValidator');

//lista y detalle de productos
router.get('/listar', productController.listar);
router.get('/detalle/:id',productController.detalle);
router.get('/productos', productController.productos);

//buscar productos
router.get('/buscar', productController.buscar);

//agregar productos
router.get('/agregar',productController.agregar);
router.post('/agregar',upLoadMulter.any(), productoValidator, productController.guardar);

//editar productos
router.get('/editar/:id',productController.editar);
router.put('/editar/:id', editProductValidator, productController.actualizar);

//borrar productos
router.delete('/eliminar/:id',productController.eliminar);

module.exports = router