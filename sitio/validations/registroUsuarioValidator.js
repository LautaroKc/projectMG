const db = require('../database/models')

const { check, body } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    check('nombre')
        .isLength({ min: 1 })
        .withMessage("Ingrese un nombre valido"),

    check('apellido')
        .isLength({ min: 1 })
        .withMessage("Ingrese un Apellido"),

    check('avatar'),

    check('email')
        .isEmail()
        .withMessage("Ingrese un email valido"),

    check('contrasenia')
        .isLength({ min: 6 })
        .withMessage("Ingrese una contraseña de minimo de 6 caracteres"),

    check('contraseniados')
        .isLength({min: 1})
        .withMessage("El campo no puede estar vacio!"),

    body('contraseniados')
    .custom(function(value,{req}){
        if(value != req.body.contrasenia){
            return false
        }
        return true
    })
    .withMessage("las contraseñas deber ser identicas")
]