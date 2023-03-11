const RootRouter = require("express").Router();
RootRouter.use("/point-vente",require("./PointVente"));
RootRouter.use("/product",require("./Product"));
RootRouter.use("/promotion",require("./Promotion"));
RootRouter.use("/gerant",require("./Gerant"));


module.exports = RootRouter;