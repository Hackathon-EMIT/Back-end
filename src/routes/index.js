const RootRouter = require("express").Router();
RootRouter.use("/point-vente",require("./PointVente"));
RootRouter.use("/product",require("./Product"));
RootRouter.use("/client", require("./Client"));
module.exports = RootRouter;