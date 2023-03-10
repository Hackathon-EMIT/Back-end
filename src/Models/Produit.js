const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class Produit extends Model{};
Produit.init({
    code_prod : {
        type: DataTypes.UUID , 
        defaultValue : DataTypes.UUIDV4 ,
        primaryKey : true 
    },
    prod_name : {
        type : DataTypes.STRING , 
        allowNull : false
    },
    prod_price : {
        type : DataTypes.DOUBLE , 
        allowNull : false
    },
    prod_type : {
        type : DataTypes.STRING , 
        allowNull : false
    },
}, { sequelize });

exports.Produit = Produit;