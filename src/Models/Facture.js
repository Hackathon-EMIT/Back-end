const sequelize  = require('./__sequelize');
const { DataTypes, Model, Sequelize }  = require("sequelize");

class Facture extends Model{};
Facture.init({
    num_fact:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },

    date_fact:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },

    mnt_fact:{
        type:DataTypes.BIGINT,
        defaultValue: 0,
    },
}, { sequelize })

module.exports = Facture;