const PromoRoute = require("express").Router();
const { PromotionCtrl } = require("../Controllers");
const { Promotion} = PromotionCtrl ;

PromoRoute.post("/create-promo",Promotion.createPromo);
PromoRoute.get("/list-produit-with-promo",Promotion.listProductWithPromo);

module.exports = PromoRoute;
