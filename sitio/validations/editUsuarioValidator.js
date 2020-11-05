const db = require('../database/models')

const {check,body} = require('express-validator');


module.exports = [

    check('nombre')
    .isLength({min: 3})
    .withMessage('Ingrese un nombre!'),

    check('apellido')
    .isLength({min: 3})
    .withMessage('Ingrese un apellido!'),

    check('email')
    .isEmail()
    .withMessage('Ingrese un email!')
    
]