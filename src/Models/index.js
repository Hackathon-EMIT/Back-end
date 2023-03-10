const sequelize = require("./__sequelize");
const Notif = require("./Notif");
const Facture = require("./Facture");
const Client = require("./Client");
const Produit = require("./Produit");
const Achat = require('./Achat');
const Gerant = require('./Gerant');
const PointSale = require('./PointSale');
const Fournisor = require("./Fournisor");
const Promo = require('./Promo');
const Stock = require("./Stock");

Produit.belongsToMany(Facture, { through: Achat });
Facture.belongsToMany(Produit, { through: Achat });

Produit.hasOne(Fournisor);
Fournisor.hasMany(Produit);

Produit.belongsToMany(PointSale, { through: Stock });
PointSale.belongsToMany(Produit, { through: Stock });

Facture.hasOne(Client);
Client.hasMany(Facture);

Facture.hasOne(PointSale);
PointSale.hasMany(Facture);

Produit.hasOne(Promo);
Promo.belongsTo(Produit);

Gerant.hasMany(PointSale);
PointSale.belongsTo(Gerant);

Gerant.hasMany(Notif);
Notif.hasOne(Gerant);

exports.sequelize = sequelize;
exports.Facture = Facture;
exports.Fournisor = Fournisor;
exports.Notif = Notif;
exports.Client = Client;
exports.Produit = Produit;
exports.Achat = Achat;
exports.Gerant = Gerant;
exports.PointSale = PointSale; 
exports.Promo = Promo;



