const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class Achat extends Model{};
Achat.init({
    qt_achat : {
        type : DataTypes.INTEGER,
                allowNull : false
    },
    mnt_total : {
        type : DataTypes.DOUBLE,
        allowNull: false
    }
},{
    sequelize
});

exports.Achat = Achat; 