const db = require('../database/models')

const { check, body } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    check("nombre")
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage("Ingrese un nombre valido"),

    check("categoria")
        .isLength({ min: 1 })
        .withMessage("Seleccione una categoria"),

    check("precio")
        .isEmpty()
        .isInt()
        .withMessage("Debe poner un precio"),

    check("descripcion")
        .isEmpty()
        .isLength({ min: 25 })
        .withMessage("Debe ingresar una descripcion minima de 25 carácteres")
]



