const setupData = require("#Utils/setupData");
const {
    //Model
    sequelize
} = require("#Model");



(async () => {

    await sequelize.sync({
        // alter:true,
        force:true
    })
    // await setupData({ uri:__dirname+"/Model.json", model: Model });

    //await relationEntreModel(
       // id,
        //id
    //);

})();
