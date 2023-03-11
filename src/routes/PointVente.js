const PointVenteRoute = require("express").Router();
const { PointVenteCtrl , PromotionCtrl } = require("../Controllers");
const { Achat , SaleStory } = PointVenteCtrl ;
const { Promotion} = PromotionCtrl ;

const { PointVenteCtrl } = require("../Controllers");
const { GeoLoc, Stock, Client, Vente } = PointVenteCtrl;

PointVenteRoute.get("/geo-loc/by-id",GeoLoc.getCoordById);
PointVenteRoute.get("/geo-loc/list",GeoLoc.getAllCoord);
PointVenteRoute.get("/geo-loc/from-region",GeoLoc.groupByRegion);

PointVenteRoute.post("/vente/:ps_id/do-sale",Vente.doSale);
PointVenteRoute.get("/vente/:ps_id/get-facture/:num_fact",Vente.getFactureById);
PointVenteRoute.get("/vente/:ps_id/get-factures",Vente.getFactures);

PointVenteRoute.get("/stock/:ps_id/all-product",Stock.getAllProduct);
PointVenteRoute.put("/stock/:ps_id/increas-stk",Stock.increasStk);
PointVenteRoute.put("/stock/:ps_id/contact-fourn",Stock.contactFournisor);
PointVenteRoute.get("/client/:ps_id/list",Client.getList);
PointVenteRoute.get("/sale-story/alter-by-date",SaleStory.alterBydate);
PointVenteRoute.get("/sale-story/search-by-Cli",SaleStory.searchByCli);

PointVenteRoute.post("/promotion/create-promotion",Promotion.createPromo);
PointVenteRoute.get("/promotion/list-produit-with-promotion",Promotion.listProductWithPromo);




module.exports = PointVenteRoute;