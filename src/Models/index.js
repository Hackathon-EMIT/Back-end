const sequelize = require("./__sequelize");
const Fournisor = require("./Fournisor");
const Notif = require("./Notif");
const Facture = require("./Facture");

exports.sequelize = sequelize;
exports.Facture = Facture;
exports.Fournisor = Fournisor;
exports.Notif = Notif;



