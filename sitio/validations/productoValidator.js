const db = require('../database/models')

const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
check('nombre')
.isLength({min: 3})
.withMessage('El nombre debe tener más de 3 caracteres!'),

check('categoria')
.isLength({min: 1})
.withMessage('Seleccione una categoria!'),

check('precio').isInt()
.withMessage('Coloque un precio!'),

check('descripcion').isLength({min: 1})
.withMessage('Ingrese un comentario!'),

check('imagen').isEmpty()
.withMessage('Coloque una imagen!'),

body('imagen')
.custom((value,{req})=>{
    if(!req.files[0]){
        return false
    }else{
        return true
    }
})
.withMessage("Tenés que subir una imagen")
]