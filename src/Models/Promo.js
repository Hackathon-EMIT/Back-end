const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class Promo extends Model{};
Promo.init({
    code_promo : {
        type : DataTypes.STRING,
        allowNull : false,
        primaryKey : true

    },
    limit_date : {
        type : DataTypes.DATE,
    },
    prom_perc : {
        type : DataTypes.DOUBLE,
        defaultValue: 0,
    }
},{
    sequelize
});

module.exports = Promo; 