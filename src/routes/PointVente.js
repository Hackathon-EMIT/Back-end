const PointVenteRoute = require("express").Router();
const { PointVenteCtrl } = require("../Controllers");
const { Achat , SaleStory} = PointVenteCtrl ;
const { GeoLoc, Stock, Client } = PointVenteCtrl;


PointVenteRoute.get("/geo-loc/by-id",GeoLoc.getCoordById);
PointVenteRoute.get("/geo-loc/list",GeoLoc.getAllCoord);
PointVenteRoute.get("/geo-loc/from-region",GeoLoc.groupByRegion)
PointVenteRoute.get("/achat/command-list",Achat.getCommandList);
PointVenteRoute.post("/achat/do-sale",Achat.doSale);



PointVenteRoute.get("/stock/:ps_id/all-product",Stock.getAllProduct);
PointVenteRoute.put("/stock/:ps_id/increas-stk",Stock.increasStk);
PointVenteRoute.put("/stock/:ps_id/contact-fourn",Stock.contactFournisor);
PointVenteRoute.get("/client/:ps_id/list",Client.getList);
PointVenteRoute.get("/sale-story/alter-by-date",SaleStory.alterBydate);
PointVenteRoute.get("/sale-story/search-by-Cli",SaleStory.searchByCli);


module.exports = PointVenteRoute;