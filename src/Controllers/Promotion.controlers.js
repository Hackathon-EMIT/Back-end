const {Promo,Produit} = require("#Model");
const {Op} = require('sequelize')

module.exports = {
    async createPromo (req,res){
        let data,err;
        const {code_promo,limit_date,prom_perc,code_prod} = req.body;
        try{
            const produit = await Produit.findOne({where:{code_prod}});
            const newPromo = await produit.createPromo({
                code_promo,
                limit_date,
                prom_perc
            })
            data = newPromo.toJSON();

        } catch(error){
            err = error
            console.log(err)
        }

        res.json({err , data});

    },


    async listProductWithPromo (_,res){
        let data,err ; 
        try{
            const produit = await Produit.findAll({
                include: [{
                  model: Promo,
                  where: { limit_date: { [Op.gt]: new Date() } } 
                }]});
            
            data = produit.map((pro) => {
                return {
                    prod_name : pro.prod_name,
                    prod_price : pro.prod_price ,
                    prod_type : pro.prod_type
                }
            });
                 
            
        } catch(error){
            err = error
            console.log(error)
        }

        res.json({err,data});
    },
}