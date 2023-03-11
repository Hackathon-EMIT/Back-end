const ProductRoute = require("express").Router();
const { ProduitCtrl } = require("../Controllers");
const { Product } = ProduitCtrl;

ProductRoute.get("/list-product", Product.getListProduct);
ProductRoute.post("/add-new-product", Product.addNewProduct);
ProductRoute.delete("/del-product/by-id", Product.delProductById);
ProductRoute.get("/get-product/by-id/:code_prod", Product.getProductById);

ProductRoute.post("/add-promo", Product.addPromo);
ProductRoute.put("/update-by-id/:code_prod",Product.updateById);

module.exports = ProductRoute;