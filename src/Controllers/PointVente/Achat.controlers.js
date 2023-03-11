const {PointSale,Produit,Achat,Stock} = require('#Model');

module.exports = {
    async doSale(req,res){
        const {prod_id,qt_achat,mnt_total} = req.body;
        let data,err;
        try{
            const onStock = await Stock.findOne({where : {prod_id}});
            if (!onStock){
                res.json({msg : "Produit indisponible , Achat impossible"})
            }
            const achat = await produit.createAchat({
                qt_achat, 
                mnt_total
            });
            data = achat.toJson();
        }catch (error) {
            err = error;
            console.error(error)
        }
        
        res.json({err,data})
        
    },

    async getFactures (req,res){
        const{code_prod} = req.body;
        let data,err;
        try{
            const achat = await Achat.findOne({where : {code_prod}});
            const facture = await achat.getFacture({
                num_fact,
                date_fact,
                mnt_fact
            });

            data = facture.toJson();

        }catch (error){
            err = error
            console.log(err)
        }
        
        res.json({data,err})
    },
    
    async getCommandList(req,res){
        let data , err;
        try{
            const achat = await Achat.findAll();
            data = achat
        }catch(error){
            err = error
            console.log(err)
        }
        res.json({err,data});

    },

    async doneCommand (req,res){
        let data, err;
        try{
            const {num_fact} = req.body; 
            const done = await Facture.findOne({where:{num_fact}});
            await done.save();
            data = done;
        }catch(e){
            err = error
            console.log(err)
        }
        res.json({err,data});
    }
}; 
