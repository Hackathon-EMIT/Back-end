const Client = require("./Client");
const Produit = require("./Produit");
const Achat = require('./Achat');
const Gerant = require('./Gerant');
const PointSale = require('./PointSale');
const Fournisor = require("./Fournisor");
const Promo = require('./Promo');
const Stock = require("./Stock");
const sequelize = require("./__sequelize");

Produit.hasOne(Fournisor);
Fournisor.hasMany(Produit);

Produit.belongsToMany(PointSale, { through: Stock });
PointSale.belongsToMany(Produit, { through: Stock });

Produit.hasOne(Promo);
Promo.belongsTo(Produit);

Gerant.hasMany(PointSale);
PointSale.belongsTo(Gerant);

exports.Fournisor = Fournisor;
exports.Achat = Achat;
exports.Client = Client;
exports.Produit = Produit;
exports.Achat = Achat;
exports.Gerant = Gerant;
exports.PointSale = PointSale; 
exports.Promo = Promo;
exports.sequelize = sequelize;



