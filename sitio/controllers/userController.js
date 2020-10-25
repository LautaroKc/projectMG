const db = require('../database/models');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
 

module.exports = {
    register : (req,res) => {
        res.render('register',{
            title : "Registro de Usuarios",
            css : 'registro.css'
        })
    },
    processRegister : (req,res) => {
        db.Usuarios.create({
            nombre : req.body.nombre.trim(),
            apellido : req.body.apellido.trim(),
            email : req.body.email.trim(),
            password : bcrypt.hashSync(req.body.contrasenia,10),
            rol : "user"
        })
        .then(usuario => {
            console.log(usuario)
            return res.redirect('/users/login')
        })
        .catch(error => console.log(error))
    },
    login : (req,res) => {
        res.render('login',{
            title : "Login de Usuarios",
            css : 'login.css'
        })
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.Usuarios.findOne({
                where : {
                    email : req.body.email
                }
            })
            .then(usuario => {
                req.session.usuario = {
                    id : usuario.id,
                    nombre : usuario.nombre,
                    apellido : usuario.apellido,
                    email : usuario.email,
                    avatar : usuario.avatar,
                    rol : usuario.rol
                }
                return res.redirect('/')
            })
            .catch(error => res.send(error))
        }else{
            res.render('login',{
                title : "Login de Usuarios",
                css : 'login.css',
                errors : errors.mapped(),
                old : req.body
            })
        }
    },
    profile : (req,res) => {
        db.Usuarios.findOne({
            where : {
                email : req.session.usuario.email
            }
        })
        .then( usuario => {
            res.render('profile',{
                title: "Mi perfil",
                css: "profile.css",
                usuario : usuario
            })
        })
    },
    editProfile : (req,res) => {
        db.Usuarios.findOne({
            where : {
                email : req.session.usuario.email
            }
        })
        .then( usuario => {
            res.render('editProfile',{
                title: "Editar Perfil",
                css: "editUsuario.css",
                usuario : usuario
            })
        })
    },
    update : (req,res) => {
        db.Usuarios.update(
            {
            nombre : req.body.nombre.trim(),
            apellido : req.body.apellido.trim(),
            email : req.body.email.trim(),
            telefono : req.body.telefono,
            direccion : req.body.direccion
            },
            {
                where : {
                    id : req.params.id
                }
            }   
        )
        .then(usuario => {
            console.log(usuario)
            return res.redirect('/users/profile')
        })
        .catch(error => console.log(error))
    },
    logout : (req,res) => {
        req.session.destroy()
        return res.redirect('/')
    },
    delete : (req,res) => {
        db.Usuarios.destroy({
            where : {
                id : req.params.id
            }
        })
        .then( () => {
            req.session.destroy();
            res.redirect('/')
        })
    }

}