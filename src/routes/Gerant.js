const GerantRoute = require("express").Router();
const {GerantCtrl} = require('../Controllers');
const {Gerant} = GerantCtrl ;

GerantRoute.post("/login" , Gerant.login);
GerantRoute.post("/sign-up" , Gerant.signup);
GerantRoute.get("/get-profil-info/:g_id" , Gerant.getProfilInfo);
GerantRoute.post("/up-date-gerant/" , Gerant.updateGerant);


module.exports = GerantRoute;