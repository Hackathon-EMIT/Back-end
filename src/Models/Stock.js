const { DataTypes, Model } = require('sequelize');
const sequelize = require('./__sequelize');

class Stock extends Model {};

Stock.init({
    nb_stock:{
        defaultValue: 0,
        type: DataTypes.INTEGER
    }
}, {
    sequelize
})