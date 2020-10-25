var express = require('express');
var router = express.Router();

let productController = require('../controllers/productController');
let upLoadMulter = require('../middlewares/upImagesProducts');

router.get('/listar',productController.listar);
router.get('/detalle/:id',productController.detalle);

router.get('/agregar',productController.agregar);
router.post('/agregar',upLoadMulter.any(), productController.guardar);

router.get('/editar/:id',productController.editar);
router.put('/editar/:id',productController.actualizar);

router.delete('/eliminar/:id',productController.eliminar);



module.exports = router