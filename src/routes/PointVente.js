const PointVenteRoute = require("express").Router();
const { PointVenteCtrl } = require("../Controllers");
const { GeoLoc } = PointVenteCtrl;
const { Achat } = PointVenteCtrl ;
PointVenteRoute.get("/geo-loc/by-id",GeoLoc.getCoordById);
PointVenteRoute.get("/geo-loc/list",GeoLoc.getAllCoord);
PointVenteRoute.get("/geo-loc/from-region",GeoLoc.groupByRegion)
PointVenteRoute.get("/achat/command-list",Achat.getCommandList);


module.exports = PointVenteRoute;