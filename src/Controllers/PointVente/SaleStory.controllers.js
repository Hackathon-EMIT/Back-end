const { PointSale, Client, Produit } = require("../../Models");
const { Op } = require("sequelize");
module.exports = {
    async filterByDate( req, res ){
        const { ps_id,date_min } = req.params;
        let err, data;
        try{
            const ps = await PointSale.findOne({
                where: { ps_id }
            })

            const facture = await ps.getFactures({
                where: {
                    date_fact:{
                        [Op.gt]: date_min
                    }
                },
                include: [
                    Client,
                    Produit
                ]
            })

            data = facture?.map(v => v.toJSON());
        } catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    }
}
