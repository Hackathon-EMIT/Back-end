const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');
const Produit = require("./Produit");
const Facture = require("./Facture");

class Achat extends Model{};
Achat.init({
    num_fact: {
        type: DataTypes.UUID,
        references: {
            model: Facture,
            key: "num_fact"
        }
    },
    code_prod: {
        type: DataTypes.UUID,
        references: {
            model: Produit,
            key:"code_prod"
        }
    },
    qt_achat: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    mnt_total : {
        type : DataTypes.DOUBLE,
        allowNull: false
    }
},{
    sequelize
});

module.exports = Achat; 