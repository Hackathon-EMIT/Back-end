const RootRouter = require("express").Router();
RootRouter.use("/point-vente",require("./PointVente"));
module.exports = RootRouter;