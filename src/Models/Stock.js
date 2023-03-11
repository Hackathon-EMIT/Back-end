const { DataTypes, Model } = require('sequelize');
const Nofif = require("./Notif");
const Produit = require("./Produit");
const PointSale = require("./PointSale");
const sequelize = require('./__sequelize');
const io = require("socket.io-client");

class Stock extends Model {};

Stock.init({
    prod_id: {
        type: DataTypes.UUID,
        references: {
            model: Produit,
            key:'code_prod'
        }
    },
    ps_id: {
        type: DataTypes.UUID,
        references: {
            model: PointSale,
            key:'ps_id'
        }
    },
    nb_stock:{
        type: DataTypes.INTEGER
    }
}, {
    sequelize
})


Stock.afterUpdate(async (stock) => {
    if(stock.nb_stock < 1){

        const { prod_name } = await Produit.findOne({
            where: { code_prod: stock.ProduitCodeProd },
        })
        const { region, ville, adrs_ps } = await PointSale.findOne({
            where: { ps_id: stock.PointSalePsId }
        })

        const notif_desc = `Le produit ${prod_name} dans le 
            point de vente situee a ${ville}, ${region}, 
            ${adrs_ps} est en rupture de stock.`

        const newNotif = (await Nofif.create({
            notif_for: "ADMIN",
            notif_title: "Rupture de stock!!",
            notif_type: "RUPT_STOCK",
            notif_desc
        })).toJSON()

        const socket = io("http://localhost:5000");
        socket.emit("stock:rupture",newNotif);
    }
    
})

module.exports = Stock;