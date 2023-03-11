const { PointSale, Client, Facture } = require("../../Models");

module.exports = {
    async AlterByDate( req, res ){
        const { code_prod } = req.params;
        let err, data;
        console.log(code_prod)

        try{
            const fact = await Facture.findAll({
                include:[{
                    model: PointSale,
                    where:{ code_prod:code_prod }
                }]
            });
            data = fact.map((facture) => {
                const { date_fact } = facture;
                return { date_fact };
            });

        } catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    }
}
