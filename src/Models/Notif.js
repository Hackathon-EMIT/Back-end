const sequelize = require('./__sequelize');
const { DataTypes, Model } = require("sequelize");

class Notif extends Model {};
Notif.init({
    notif_for:{
        type: DataTypes.ENUM("ADMIN","CLIENT"),
        defaultValue: "CLIENT"
    },
    notif_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },

    notif_title:{
        type:DataTypes.STRING,
    },

    notif_desc:{
        type:DataTypes.TEXT,
    },

    notif_type:{
        type:DataTypes.ENUM("RUPT_STOCK"),
    },

}, { sequelize })

module.exports = Notif;