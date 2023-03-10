const { DataTypes , Model} = require('sequelize');
const sequelize = require('./__sequelize');

class Client extends Model{};
Client.init({
    cli_name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    cli_fname : {
        type : DataTypes.STRING,
        allowNull: false
    },
    cli_CIN : {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true
    }

}, { sequelize });


module.exports = Client; 