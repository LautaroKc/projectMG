const db = require('../database/models');
const {Op} = require ("sequelize");
const {validationResult} = require('express-validator');

module.exports = {
    listar : (req,res) => {
        db.Productos.findAll()
        .then(productos => {
            res.render('listaProductos',{
                title : "Productos subidos",
                productos : productos,
                css: "listaProductos.css"
            })
        })
    },
    productos: (req,res) =>{
        db.Productos.findAll()
        .then(productos => {
            res.render('todoProductos',{
                title : "Listado de Productos",
                productos : productos,
                css: "todosProductos.css"
            })
        })
    },
    buscar: function(req, res) {
    let buscar = req.query.buscador;
    db.Productos.findAll({
        where: {
            nombre: {
                [Op.like] : buscar
            }
        }, include: [{association : 'categoria'}]
    })
    .then(resultado => {
        if(resultado != 0){
            res.render('productoBuscar',{
                title: "Resultado de búsqueda",
                css: "index.css",
                producto: resultado
            })
        } else {
            res.redirect('/')
        }
    })
    },
    detalle : (req,res) => {
        db.Productos.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {association : 'categoria'}
            ]
        })
        .then( producto => {
            res.render('detalleProducto',{
                title : "Detalle del Producto",
                producto : producto,
                css: "detalleProducto.css"
            })
        })
    },
    armado : (req,res) =>{
        db.Productos.findAll()
        .then(productos => {
            res.render('armadoDePc',{
                title : "Armado de PC",
                css: "armado.css",
                productos : productos
            })
        })
    },
    agregar : (req,res) => {
        db.Categorias.findAll({
            order:[
                'nombre'
            ]
        })
        .then(categorias => {
            res.render('registroProducto', {
                title: "Agregar Producto",
                css:'registroProduct.css',
                categorias: categorias
            }) 
        })
    },
    guardar : (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Productos.create({
                nombre:req.body.nombre.trim(),
                precio:Number(req.body.precio),
                descripcion:req.body.descripcion,
                imagen:(req.files[0])?req.files[0].filename: "noimage.png",
                id_categoria:Number(req.body.categoria)
            })
            .then(result => {
                console.log(result)
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            }) 
        } else {
            db.Categorias.findAll({
                order:[
                    'nombre'
                ]
            })
            .then(categoria => {
                res.render('registroProducto', {
                    title: "Agregar Producto",
                    css: 'registroProduct.css',
                    categorias: categoria,
                    errors: errors.mapped()
                })  
            })
        }
    },
    editar : (req,res) => {
        let categorias = db.Categorias.findAll({
            order:[
                'nombre'
            ]
        })
        let producto = db.Productos.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {association : 'categoria'}
            ]
        })
        Promise.all([categorias,producto])
        .then(([categorias,producto]) => {
            console.log("error")
            res.render('editarProducto', {
                title: "Editar Producto",
                css:'editProducto.css',
                categorias: categorias,
                producto : producto
            }) 
        })
    },
    actualizar : (req,res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            console.log("error")
            db.Productos.update({
                nombre:req.body.nombre.trim(),
                precio:Number(req.body.precio),
                descripcion:req.body.descripcion,
                id_categoria:Number(req.body.categoria)
            },
            {
                where : {
                    id : req.params.id
                }
            }
           
            )
            .then(result => {
                console.log(result)
                res.redirect('/products/listar')
            })
            .catch(err => {
                res.send(err)
            })
        }else{
            let categorias = db.Categorias.findAll({
                order:[
                    'nombre'
                ]
            })
            let producto = db.Productos.findOne({
                where : {
                    id : req.params.id
                },
                include : [
                    {association : 'categoria'}
                ]
            })
            Promise.all([categorias,producto])
            .then(([categorias,producto]) => {
                console.log("error")
                res.render('editarProducto', {
                    title: "Editar Producto",
                    css:'editProducto.css',
                    categorias: categorias,
                    producto : producto
                }) 
            })
        }
    },
    eliminar : (req,res) => {
        db.Productos.destroy({
            where : {
                id : req.params.id
            }
        })
        .then( () => {
            console.log('PRODUCTO ELIMINADO...')
            return res.redirect('/products/listar')
        })
        .catch( error => res.send(error))
    }
}