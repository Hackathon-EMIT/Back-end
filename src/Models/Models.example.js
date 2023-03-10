const { Model,Datatypes, DataTypes } = require("sequelize");
const sequelize = require("./__sequelize");

class exampleModel extends Model {};

exampleModel.init({

    exampleModel_id :{

    },
}, { sequelize })

module.exports = User;