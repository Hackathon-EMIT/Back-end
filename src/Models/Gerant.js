const {DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class Client extends Model{};
Client.init({
    g_id : {
        type : DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4 ,
        primaryKey : true , 
        allowNull : false
    },
    g_pass : {
        type : DataTypes.STRING,
        allowNull: false
    },
    g_email : {
        type : DataTypes.BIGINT,
        allowNull: false,
    }
},{
    sequelize
});

exports.Client = Client; 