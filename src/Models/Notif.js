const sequelize = require('./__sequelize');
const {DataTypes,Model} = require("sequelize");

class Notif extends Model {};
Notif.init({
    notif_id: {
        type : DataTypes.UUID,
        primaryKey:true,
    },

    notif_motif:{
        type:DataTypes.STRING
    },

    notif_title:{
        type:DataTypes.STRING,
    },

    notif_desc:{
        type:DataTypes.STRING(10),
    },

    notif_type:{
        type:DataTypes.ENUM('Rupt', 'Acht'),
    },

}, { sequelize })

module.exports = Notif;