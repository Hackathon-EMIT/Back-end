const setupData = require("#Utils/setupData");
const relationProduitPromo = require('./ProduitPromo');

const relationGerantNotif = require("./GerantNotif");
const relationProduitPS = require("./ProduitPointsal");
const relationProduitFacture = require("./ProduitFacture");
const relationproduitfournisor = require("./ProduitFournisor");
const relationGerantPS = require("./GerantPS");
const relationFacturePS = require("./FacturePS");
const relationFactureClient = require("./FactureClient");

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
    );

    await relationProduitPS(
        "92fd267d-5446-4f8d-aedd-c345d80c7737",
        "53e9a54c-df5a-470a-bf8f-0d357457a474"
    );

    await relationProduitPS(
        "92fd267d-5446-4f8d-aedd-c345d80c7737",
        "53e9a54c-df5a-470a-bf00-0d357457a474"
    );

    await relationProduitFacture(
        "53e9a54c-df5a-470a-bf8f-0d357457a474",
        "53e9a54c-df5a-470a-bf8f-0d357457a984"
    );

    await relationGerantPS(
        "53e9a54c-df5a-470a-bf8f-0d357457a984",
        "92fd267d-5446-4f8d-aedd-c345d80c7737"
    );

    await relationFacturePS(
        "92fd267d-5446-4f8d-aedd-c345d80c7737",
        "53e9a54c-df5a-470a-bf8f-0d357457a984"
    );

    await relationFactureClient(
        "101231334567",
        "53e9a54c-df5a-470a-bf8f-0d357457a984"
    )

})();
