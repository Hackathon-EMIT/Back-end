const {Achat} = require('./Achat');
const {Client} = require('./Client');
const {Gerant} = require('./Gerant');
const {PointSale} = require('./PointSale');
const {Produit} = require('./Produit');
const {Promo} = require('./Promo');

Produit.hasOne(Promo, {
    foreignKey : 'code_prod'
})
Promo.belongsTo(Produit)



exports.Achat = Achat;
exports.Client = Client;
exports.Gerant = Gerant;
exports.PointSale = PointSale ; 
exports.Produit = Produit;
exports.Promo = Promo;




