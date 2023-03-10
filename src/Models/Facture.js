const sequelize  = require('./__sequelize');
const { DataTypes, Model }  = require("sequelize");

class Facture extends Model{};
Facture.init({
    num_fact:{
        type:DataTypes.UUID,
        primaryKey:true,
    },

    date_fact:{
        type:DataTypes.STRING,
    },

    mnt_fact:{
        type:DataTypes.BIGINT,
    },
}, { sequelize })

module.exports = Facture;