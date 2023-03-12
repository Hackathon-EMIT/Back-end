exports.PointVenteCtrl = {
    GeoLoc: require("./PointVente/GeoLoc.controllers"),
    Vente: require("./PointVente/Vente.controllers"),
    GeoLoc: require("./PointVente/GeoLoc.controllers"),
    Stock: require("./PointVente/Stock.controllers"),
    Client: require("./PointVente/Client.controllers"),
    SaleStory: require("./PointVente/SaleStory.controllers"),
}, 

exports.ProduitCtrl = {
    Product: require("./Product.controllers"),
},

exports.ClientCtrl = {
    Client: require("./Client.controllers"),
};

exports.PromotionCtrl = {
    Promotion: require("./Promotion.controlers")
};

exports.SaleStoryCtrl = {
    SaleStory: require("./SaleStory.contrrollers")
}

exports.GerantCtrl = {
    Gerant : require("./Gerant.controlers")
};

