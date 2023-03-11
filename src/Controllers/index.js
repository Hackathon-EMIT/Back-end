exports.PointVenteCtrl = {
    GeoLoc: require("./PointVente/GeoLoc.controllers")
},

exports.ProduitCtrl = {
    Product: require("./Product.controllers"),
    Vente: require("./PointVente/Vente.controlers"),
    GeoLoc: require("./PointVente/GeoLoc.controllers"),
    Stock: require("./PointVente/Stock.controllers"),
    Client: require("./PointVente/Client.controllers"),
}