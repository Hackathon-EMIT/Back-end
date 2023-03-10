const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'db.sqlite',
    logging:false
});

// (async()=>{
    
// })();

module.exports = sequelize;