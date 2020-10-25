module.exports = (sequelize, dataTypes) => {
    let alias = "Categorias";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false, 
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        }
    }
    let config = {
        tableName : 'categories',
        timestamps:false
    }
    const Categorie = sequelize.define(alias,cols,config);

    Categorie.associate = function(models){

        Categorie.hasMany(models.Productos,{ //tiene muchos productos (relacion 1:N)
            as:"productos",
            foreignKey:"id_categoria"
        })
    }
    return Categorie;
}