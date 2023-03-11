const SaleStoryRoute = require("express").Router();
const { SaleStoryCtrl } = require("../Controllers");
const { SaleStory } = SaleStoryCtrl ;

SaleStoryRoute.get("/by-date/:date_min",SaleStory.filterByDate);
SaleStoryRoute.get("/by-name-like",SaleStory.searchByCliName);
SaleStoryRoute.get("/all",SaleStory.allSaleStory);

module.exports = SaleStoryRoute;