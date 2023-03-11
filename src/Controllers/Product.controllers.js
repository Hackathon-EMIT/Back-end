const { Produit, Promo, PointSale } = require("../Models");

module.exports = {
    async getListProduct( req, res ){
        let data,err;

        try {
            const produitlist = await Produit.findAll({
                attributes:["code_prod", "prod_name", "prod_type","prod_price"],
            });
            data = await produitlist.map(v=>v.toJSON());
        } 
        catch (error) {
            err = error;
            console.error(error);       
        
    }

        res.json({ err,data })
    },


    async addNewProduct( req, res ){
        const { code_prod, prod_name, prod_price, prod_type } = req.body;
        let data, err;

        try {
            const allPointSales = await PointSale.findAll();
            const newProduit = await Produit.create({
                prod_name,
                prod_price,
                prod_type
            });

            for(const ps of allPointSales){
                ps.addProduit(newProduit,{
                    through: { nb_stock:0 }
                })
                await ps.save();
            }

            data = await newProduit.toJSON();
        } 

        catch (error) {
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    },


    async delProductById( req, res ){
        const { code_prod } = req.query;
        let err, data;

        try {
            const delProd = await Produit.destroy({ where : { code_prod } });
            data = await delProd;

        }

        catch (error ){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    },


    async getProductById( req, res ){
        const { code_prod } = req.params;
        let err, data;

        try{
            const getProd = await Produit.findOne({ 
                attributes:["code_prod", "prod_name", "price_prod"],
                where : code_prod });
            data = await getProd.toJSON();
        }

        catch(error) {
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    }, 


    async addPromo( req, res ){
        const { code_promo, limit_date, prom_prec } = req.body;
        let data, err;

        try {
            const prom = await Promo.create({
                code_promo,
                limit_date,
                prom_prec
            });
            data = await prom.toJSON();
        }

        catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data})
    },

    
    async updateById(req,res){
        let data,err;
        const { prod_name, prod_price, prod_type } = req.body;
        const{ code_prod } = req.params;
        try {
            await Produit.update({
                prod_price,
                prod_name,
                prod_type,
            },{ where: { code_prod } })

            const updatedProduit = await Produit.findOne({
                where: { code_prod },
                attributes:[
                    "code_prod",
                    "prod_name",
                    "prod_price",
                    "prod_type"
                ]
            })

            data = updatedProduit;
        }

        catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data})
    }
}