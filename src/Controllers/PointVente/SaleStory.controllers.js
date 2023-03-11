const { PointSale, Client, Produit } = require("../../Models");
const { Op } = require("sequelize");
module.exports = {
    async FilterByDate( req, res ){
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
    },


    async searchByCliName(req,res){
        const { cli_name_like } = req.query
        const { ps_id } = req.params;
        let err, data;
        try{
            const searcedClients = await Client.findAll({
                where: {
                    cli_name: {
                        [Op.like]: `%${cli_name_like}%`
                    }
                }
            })

            const allFactures = [];      
            for (const client of searcedClients) {
                const factures = await client.getFactures({
                    include: Produit,
                    where: { PointSalePsId: ps_id }
                })

                allFactures.push(...factures);
            }

            data = allFactures;
        } catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    }
}
