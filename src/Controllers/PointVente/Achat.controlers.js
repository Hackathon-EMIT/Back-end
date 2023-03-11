const {PointSale,Produit,Achat,Stock} = require('#Model');
const { where } = require('sequelize');

module.exports = {
    async doSale(req,res){
        const {code_prod,qt_achat,prod_price, ps_id} = req.body;
        let data,err;
        try{
            const ps = await PointSale.findOne({where: {ps_id}}); 
            const produit = await Produit.findOne({where : {code_prod}})
            const onstock = await Stock.findOne({where : {ps_id,code_prod}});

            if(onstock.nb_stock == 0){
                data = "Achat impossible , stock epuise"
            }


            const achat = await Achat.create({
                code_prod,
                qt_achat, 
                mnt_total : qt_achat*prod_price
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



// const nb_stock = onstock.forEach(element => {
            //     return element.Stock.nb_stock
            // });
            // await ps.countProduits({through:{where:{nb_stock}}});
            // if ( onstock.nb_stock == 0){
            //     return err = "Stock epuiser"
            // }
            // const produit = await Produit.findOne({where:{prod_id}});