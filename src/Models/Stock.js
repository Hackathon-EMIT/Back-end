const { DataTypes, Model } = require('sequelize');
const Produit = require("./Produit");
const PointSale = require("./PointSale");
const sequelize = require('./__sequelize');

class Stock extends Model {};

Stock.init({
    prod_id: {
        type: DataTypes.UUID,
        references: {
            model: Produit,
            key:'code_prod'
        }
    },
    ps_id: {
        type: DataTypes.UUID,
        references: {
            model: PointSale,
            key:'ps_id'
        }
    },
    nb_stock:{
        type: DataTypes.INTEGER
    }
}, {
    sequelize
})

module.exports = Stock;