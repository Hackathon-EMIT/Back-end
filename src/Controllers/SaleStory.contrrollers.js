const { Facture, Client, Produit, PointSale } = require("../Models");
const { Op } = require("sequelize");
module.exports = {
    async filterByDate(req,res){
        const { date_min } = req.params;
        let err, data;
        try{

            const facture = await Facture.findAll({
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
                    include: [
                        Produit,
                        Client
                    ],
                })

                allFactures.push(...factures);
            }

            data = allFactures;

        } catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    },


    async allSaleStory(_,res){
        let err, data;
        try{
            const allFactures = await Facture.findAll({
                include: [
                    Client,
                    PointSale,
                    Produit
                ]
            });
            data = allFactures.map(v => v.toJSON());

        } catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    }

}