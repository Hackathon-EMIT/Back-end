const { PointSale,Client } = require("../../Models");

module.exports = {
    async getList(req,res){
        let data,err;
        const { ps_id } = req.params;
        try {
            const ps = await PointSale.findOne({
                where: { ps_id }
            })

            const factures = await ps.getFactures({
                include: {
                    model: Client,
                    attributes: [
                        "cli_name",
                        "cli_fname",
                        "cli_CIN"
                    ]
                }
            });
            const clients = factures.map((fact) =>{
                fact = fact.toJSON();
                return fact.Client;
            });

            data = clients;


        } catch (error) {
            console.log(error);
            err = {
                errType: "UNKNOWN"
            }
        }
        res.json({ data, err })
    },

}