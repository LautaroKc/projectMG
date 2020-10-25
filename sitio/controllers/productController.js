const db = require('../database/models');

module.exports = {
    listar : (req,res) => {
        db.Productos.findAll()
        .then(productos => {
            res.render('productos',{
                title : "Listado de Productos",
                productos : productos
            })
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
                producto : producto
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
        db.Productos.create({
            nombre:req.body.nombre.trim(),
            precio:Number(req.body.precio),
            descripcion:req.body.descripcion,
            imagen:req.files[0].filename,
            id_categoria:Number(req.body.categoria)
        })
        .then(result => {
            console.log(result)
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
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
            res.render('editarProducto', {
                title: "Editar Producto",
                css:'editProducto.css',
                categorias: categorias,
                producto : producto
            }) 
        })
    },
    actualizar : (req,res) => {
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