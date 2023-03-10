const setupData = require("#Utils/setupData");
const relationProduitPromo = require('./ProduitPromo');

const relationGerantNotif = require("./GerantNotif");
const relationProduitFacture = require("./ProduitFacture");
const relationproduitfournisor = require("./ProduitFournisor");


const {
    //Model
    Client,
    Facture,
    Fournisor , 
    Gerant , 
    Notif , 
    PointSale , 
    Produit , 
    Promo , 
    sequelize
} = require("#Model");



(async () => {

    await sequelize.sync({
        alter:true,
        force:true
    })

    await setupData({ uri:__dirname+"/Client.json", model: Client });
    await setupData({ uri:__dirname+"/Facture.json", model: Facture });
    await setupData({ uri:__dirname+"/Fournisor.json", model: Fournisor });
    await setupData({ uri:__dirname+"/Gerant.json", model: Gerant });
    await setupData({ uri:__dirname+"/Notif.json", model: Notif });
    await setupData({ uri:__dirname+"/PointSale.json", model: PointSale });
    await setupData({ uri:__dirname+"/Produit.json", model: Produit });
    await setupData({ uri:__dirname+"/Promo.json", model: Promo });



    await relationProduitPromo (
        "53e9a54c-df5a-470a-bf8f-0d357457a474" , 
        "123"

    );


    //await relationEntreModel(
       // id,
        //id
    //);
    await relationGerantNotif(
        "53e9a54c-df5a-470a-bf8f-0d357457a984",
        "53ac94bd-0f3b-448f-9f7a-01904da85054"
    );

    await relationproduitfournisor(
        "53e9a54c-df5a-470a-bf8f-0d357c57aa84",
        "53e9a54c-df5a-470a-bf8f-0d357457a474"
    )

    await relationProduitFacture(
        "53e9a54c-df5a-470a-bf8f-0d357457a474",
        "53e9a54c-df5a-470a-bf8f-0d357457a984"
    );


})();
