const { PointSale, Produit } = require("../../Models");

module.exports = {
    async getAllProduct(req,res){
        let data,err;
        const { ps_id } = req.params;
        console.log(ps_id)
        try {
            const ps = await PointSale.findOne({ 
                where: { ps_id },
                include: [{
                    all: true,
                    nested:true
                }] 
            });
            const produits = ps.Produits.map((prod) => {
                const { 
                    code_prod, 
                    prod_name, 
                    prod_price,
                    prod_type,
                    Promo,
                    Stock
                } = prod;

                const {
                    nb_stock
                } = Stock;

                const {
                    limit_date,
                    prom_perc
                } = Promo;

                const price_with_promo = (prod_price-(prod_price*prom_perc)/100);

                let prodToReturn = {
                    prom_date_limit:limit_date,
                    price_with_promo,
                    prom_perc,
                    code_prod,
                    prod_name,
                    prod_price,
                    prod_type,
                    nb_stock,
                };

                return prodToReturn;
            });

            data = produits;
        } catch (error) {
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    },


    async increasStk(req,res){
        let data,err;
        const { ps_id } = req.params;
        const { val_to_increas, code_prod } = req.body;
        const produit = await Produit.findOne({
            where: { code_prod },
        })

        let ps = await produit.getPointSales({
            where: { ps_id }
        }) 

        if(ps[0]){
            ps = ps[0];
            let { Stock } = ps;
            Stock.nb_stock += val_to_increas;
            await Stock.save();
            data = Stock.toJSON();
        } else {
            err = {
                errType:"NO_PS_VALID"
            }
        }

        res.json({ data, err })
    }


}