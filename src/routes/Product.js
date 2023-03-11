const ProductRoute = require("express").Router();
const { ProduitCtrl } = require("../Controllers");
const { Product } = ProduitCtrl;
ProductRoute.get("/list-product", Product.getListProduct);
ProductRoute.post("/add-new-product", Product.addNewProduct);
ProductRoute.delete("/del-product/by-id", Product.delProductById);
ProductRoute.post("/get-product/by-id", Product.getProductById);
ProductRoute.post("/add-promo", Product.addPromo);

module.exports = ProductRoute;