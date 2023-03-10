const Client = require("./Client");
const Produit = require("./Produit");
const Achat = require('./Achat');
const Gerant = require('./Gerant');
const PointSale = require('./PointSale');
const Promo = require('./Promo');
const Stock = require("./Stock");
const sequelize = require("./__sequelize");

Produit.belongsToMany(PointSale, { through: Stock });
PointSale.belongsToMany(Produit, { through: Stock })

exports.sequelize = sequelize;
exports.Client = Client;
exports.Produit = Produit;
exports.Achat = Achat;
exports.Gerant = Gerant;
exports.PointSale = PointSale; 
exports.Promo = Promo;



