const setupData = require("#Utils/setupData");

const {
    //Model
    Facture,
    Fournisor,
    Notif,
    sequelize
} = require("#Model");



(async () => {

    await sequelize.sync({
        // alter:true,
        force:true
    })
    // await setupData({ uri:__dirname+"/Model.json", model: Model });
    await setupData({ uri:__dirname+"/Fournisor.json", model: Fournisor });
    await setupData({ uri:__dirname+"/Notif.json", model: Notif });
    await setupData({ uri:__dirname+"/Facture.json", model: Facture });


    //await relationEntreModel(
       // id,
        //id
    //);
})();
