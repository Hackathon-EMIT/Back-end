const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class PointSale extends Model{};
PointSale.init({
    ps_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    coord_long: {
        type : DataTypes.STRING,
        allowNull : false,
    },
    coord_lat: {
        type : DataTypes.STRING,
        allowNull : false,
    },
    region : {
        type : DataTypes.STRING,
        allowNull: false
    },
    adrs_ps : {
        type : DataTypes.BIGINT,
        allowNull: false,
    },
    ville : {
        type : DataTypes.STRING,
        allowNull: false
    },
} , {
    sequelize
});

module.exports = PointSale ; 