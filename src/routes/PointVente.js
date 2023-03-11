const PointVenteRoute = require("express").Router();
const { PointVenteCtrl } = require("../Controllers");
const { GeoLoc, Stock } = PointVenteCtrl;

PointVenteRoute.get("/geo-loc/by-id",GeoLoc.getCoordById);
PointVenteRoute.get("/geo-loc/list",GeoLoc.getAllCoord);
PointVenteRoute.get("/geo-loc/from-region",GeoLoc.groupByRegion)

//PointVenteRoute.get("/stock/:ps_id/all-product",Stock.getAllProduct);
//PointVenteRoute.put("/stock/:ps_id/increas-stk",Stock.increasStk);

module.exports = PointVenteRoute;