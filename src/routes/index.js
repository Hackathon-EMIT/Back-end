const RootRouter = require("express").Router();
RootRouter.use("/point-vente",require("./PointVente"));
RootRouter.use("/product",require("./Product"));
module.exports = RootRouter;