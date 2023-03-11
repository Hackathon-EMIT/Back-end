const { Client } = require("../Models");

module.exports = {
    async getByCin( req, res ){
        const { cli_CIN } = req.params;
        let err, data;

        try {
            const getCli = await Client.findOne({
                attributes:["cli_name", 
                            "cli_fname",
                             "cli_CIN"],
                             
                where: { cli_CIN }
            });
            data = await getCli.toJSON();
        }

        catch(error){
            err = error;
            console.log(error);
        }

        res.json({ err, data })
    },

    async getListCli( req, res ){
        let err, data;

        try{
            const listCli = await Client.findAll({
                attributes:["cli_name", "cli_name", "cli_CIN"],
            });
            data = await listCli.map(v=>v.toJSON());
        }
        catch(error){
            err = error;
            console.error(error);
        }

        res.json({ err, data })
    },

        async delClientBycin( req, res ){
        const { cli_CIN } = req.params;
        let err, data;

        try{
            const delCli = await Client.destroy({
                where: { cli_CIN },
            });
            data = await delCli;
        }
        catch(error){
            err = error ;
            console.log(error);
        }

        res.json({ err, data })
    }
}