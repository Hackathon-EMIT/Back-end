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
        const {cli_CIN} = req.body;
        try{
            const searchCli = await Facture.findAll({where:{cli_CIN} , include: ['Client']});
            data = searchCli.toJSON();

        }catch(error){
            err = error;
            console.error(error)
        }
 
    },
    async saleStoryStats(){


    }



};