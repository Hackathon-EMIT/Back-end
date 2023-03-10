const sequelize = require('./__sequelize');
const {DataTypes,Model} = require("sequelize");

class Fournisor extends Model {};
fournisor.init({
    id_four : {
        type : DataTypes.STRING,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
    },

    adrs_four:{
        type:DataTypes.STRING
    },

    name_four:{
        type:DataTypes.STRING,
    },

    tel_four:{
        type:DataTypes.STRING(10),
    },

    email_four:{
        type:DataTypes.STRING,
    },

}, { sequelize })

module.exports = Fournisor;