const Client = require("./Client");
const Produit = require("./Produit");
const Achat = require('./Achat');
const Gerant = require('./Gerant');
const PointSale = require('./PointSale');
const Promo = require('./Promo');


Produit.hasOne(Promo, {
    foreignKey : 'code_prod'
})
Promo.belongsTo(Produit)

Gerant.hasMany(PointSale , {
    foreignKey : 'g_id'
})
PointSale.belongsTo(Gerant)


exports.Achat = Achat;
exports.Client = Client;
exports.Produit = Produit;
exports.Achat = Achat;
exports.Gerant = Gerant;
exports.PointSale = PointSale; 
exports.Promo = Promo;



