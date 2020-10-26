const db = require('../database/models')

module.exports = {
    index : (req,res) => {
        db.Productos.findAll()
        .then(productos => {
            res.render('index',{
                productos : productos,
                title : "Mountain Gamming"
            })
        })
        .catch(error => res.send(error))  
    },
    help: function(req, res){
        res.render('ayuda', {
            css: "ayuda.css",
            title: "Ayuda"
        })
    }
}