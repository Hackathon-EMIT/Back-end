const setupData = require("#Utils/setupData");
const relationGerantNotif = require("./GerantNotif");

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
    await relationGerantNotif(
        "53e9a54c-df5a-470a-bf8f-0d357457a984",
        "53ac94bd-0f3b-448f-9f7a-01904da85054"
    );
    
})();
