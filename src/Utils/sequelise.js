const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'db.sqlite'
});

// (async()=>{
//     await sequelize.sync({
//         alter:true,
//     })
// })();

module.exports = sequelize;