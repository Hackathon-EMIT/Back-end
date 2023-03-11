const PromotionRoute = require("express").Router();
const {PromotionCtrl} = require("../Controllers");
const {Promotion} = PromotionCtrl;

PromotionRoute.get("/list-produit-with-promotion" , Promotion.listProductWithPromo);
PromotionRoute.post("/create-promotion", Promotion.createPromo);

module.exports = PromotionRoute;