const ClientRoute = require("express").Router();
const { ClientCtrl } = require("../Controllers");
const { Client } = ClientCtrl;

ClientRoute.get("/get-cli/by-id/:cli_CIN", Client.getByCin);
ClientRoute.get("/list-cli", Client.getListCli);
ClientRoute.delete("/del-cli/by-cin/:cli_CIN" ,Client.delClientBycin);

module.exports = ClientRoute;