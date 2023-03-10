const setupData = require("#Utils/setupData");

const {
    //Model
    Achat , 
    Client,
    Facture,
    Fournisor , 
    Gerant , 
    Notif , 
    PointSale , 
    Produit , 
    Promo , 
    Stock,
    sequelize
} = require("#Model");



(async () => {

    await sequelize.sync({
        alter:true,
        force:true
    })
<<<<<<< HEAD
    await setupData({ uri:__dirname+"/Achat.json", model: Achat });
    await setupData({ uri:__dirname+"/Client.json", model: Client });
    await setupData({ uri:__dirname+"/Facture.json", model: Facture });
    await setupData({ uri:__dirname+"/Fournisor.json", model: Fournisor });
    await setupData({ uri:__dirname+"/Gerant.json", model: Gerant });
    await setupData({ uri:__dirname+"/Notif.json", model: Notif });
    await setupData({ uri:__dirname+"/PointSale.json", model: PointSale });
    await setupData({ uri:__dirname+"/Produit.json", model: Produit });
    await setupData({ uri:__dirname+"/Promo.json", model: Promo });
    await setupData({ uri:__dirname+"/Stock.json", model: Stock });




=======
    // await setupData({ uri:__dirname+"/Model.json", model: Model });
    await setupData({ uri:__dirname+"/Fournisor.json", model: Fournisor });
    await setupData({ uri:__dirname+"/Notif.json", model: Notif });
    await setupData({ uri:__dirname+"/Facture.json", model: Facture });
>>>>>>> 851bd3eccc364662295f743d3f8c2a3eb094123d


    //await relationEntreModel(
       // id,
        //id
    //);
})();
