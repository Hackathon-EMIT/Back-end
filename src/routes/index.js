const RootRouter = require("express").Router();
RootRouter.use("/point-vente",require("./PointVente"));
RootRouter.use("/product",require("./Product"));
RootRouter.use("/client", require("./Client"));
RootRouter.use("/promo",require("./Promotion"));
module.exports = RootRouter;