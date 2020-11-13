var express = require('express');
var router = express.Router();

let productController = require('../controllers/productController');
let upLoadMulter = require('../middlewares/upImagesProducts');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
//Validaciones
const productoValidator = require('../validations/productoValidator');
const editProductValidator = require('../validations/editProductValidator');

//lista y detalle de productos
router.get('/listar', productController.listar);
router.get('/detalle/:id',productController.detalle);
router.get('/productos', productController.productos);
router.get('/armado',productController.armado);

//buscar productos
router.get('/buscar', productController.buscar);

//agregar productos
router.get('/agregar',sessionUserCheck, productController.agregar);
router.post('/agregar',upLoadMulter.any(), productoValidator, productController.guardar);

//editar productos
router.get('/editar/:id',productController.editar);
router.put('/editar/:id', editProductValidator, productController.actualizar);

//borrar productos
router.delete('/eliminar/:id',productController.eliminar);

module.exports = router