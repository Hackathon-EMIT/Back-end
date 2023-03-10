const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class PointSale extends Model{};
PointSale.init({
    coord_long: {
        type : DataTypes.STRING,
        allowNull : false,
        primaryKey : true
    },
    coord_lat: {
        type : DataTypes.STRING,
        allowNull : false,
        primaryKey:true
    },
    region : {
        type : DataTypes.STRING,
        allowNull: false
    },
    adrs_ps : {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true
    },
    ville : {
        type : DataTypes.STRING,
        allowNull: false
    },
} , {
    sequelize
});

module.exports = PointSale ; 