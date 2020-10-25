const db = require('../database/models')

const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('contrasenia')
    .isLength({
        min:1
    })
    .withMessage('Escribe tu contraseña'),
    

    body('contrasenia')
    .custom((value,{req})=>{
       
        return db.Usuarios.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            if(!bcrypt.compareSync(value,user.password)){
                return Promise.reject('constraseña incorrecta')
            }
        })
        .catch(() => {
            return Promise.reject('Credenciales inválidas')
        })
    })
]