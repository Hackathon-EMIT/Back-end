const { Facture } = require("../../Models");

module.exports= {
    async alterBydate (req,res){
        const {date_fact} = req.body;
        let data, err;
        try{
            const history = await Facture.findOne({
                where: date_fact
            });
            data = history.toJSON();

        }catch(error){
            err = error;
            console.error(error)
        }
        res.json({err,data});


    },

    async searchByCli (req,res){
        const {ClientCliCIN} = req.body;
        try{
            const searchCli = await Facture.findOne({where:{ClientCliCIN}});
            data = searchCli.toJSON();

        }catch(error){
            err = error;
            console.error(error)
        }
 
    },
    async saleStoryStats(){


    }



};