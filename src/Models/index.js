const Client = require("./Client");
const Produit = require("./Produit");
const Achat = require('./Achat');
const Gerant = require('./Gerant');
const PointSale = require('./PointSale');
const Promo = require('./Promo');
const Stock = require("./Stock");
const sequelize = require("./__sequelize");

Produit.belongsToMany(PointSale, { through: Stock });
PointSale.belongsToMany(Produit, { through: Stock });

Produit.hasOne(Promo);
Promo.belongsTo(Produit);

Gerant.hasMany(PointSale);
PointSale.belongsTo(Gerant);

exports.Achat = Achat;
exports.Client = Client;
exports.Produit = Produit;
exports.Achat = Achat;
exports.Gerant = Gerant;
exports.PointSale = PointSale; 
exports.Promo = Promo;
exports.sequelize = sequelize;



