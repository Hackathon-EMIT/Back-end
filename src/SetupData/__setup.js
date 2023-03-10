const setupData = require("#Utils/setupData");
const relationProduitFacture = require('./ProduitFacture');

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


    await relationProduitFacture(
        "53e9a54c-df5a-470a-bf8f-0d357457a474",
        "53e9a54c-df5a-470a-bf8f-0d357457a984"
    );
})();
