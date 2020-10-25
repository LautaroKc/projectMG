module.exports = (sequelize,dataTypes) => {
    let alias = "Productos";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false, //permite nulo?
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(500),
            allowNull:false
        },
        precio:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(300),
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        id_categoria:{
            type:dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName : 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
    
        Product.belongsTo(models.Categorias,{ //le pertenece a una categoria (relacion N:1)
            as : "categoria",
            foreignKey:"id_categoria"
        })
       
    }

    return Product;
}