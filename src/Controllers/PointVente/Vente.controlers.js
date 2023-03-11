const { PointSale, Produit, Achat, Client } = require('../../Models');

module.exports = {
    async doSale(req,res){
        let data,err;
        const { ps_id } = req.params;
        const { to_sales,client } = req.body;
        const { cli_CIN,cli_name,cli_fname } = client
        let saleProduct = [];
        try{
            const ps = await PointSale.findOne({
                where: { ps_id }
            });
            const newFacture = await ps.createFacture({},{
                includes: [ Produit ]
            });
            const [ existingClient, newClient ] = await Client.findOrCreate({
                where:{ cli_CIN },
                defaults: {
                    cli_CIN,
                    cli_fname,
                    cli_name
                }
            });
            if (existingClient) {
                existingClient.addFacture(newFacture)
            } else {
                newClient.addFacture(newFacture)
            }
            await newFacture.save();
            for (const { code_prod,qt_achat } of to_sales) {
                let produit = await ps.getProduits({
                    where: { code_prod },
                });

                produit = produit[0] || {};
                const { Stock, prod_name, prod_price } = produit;
                const mnt_total = qt_achat*prod_price;
                Stock.nb_stock -= qt_achat;
                await Stock.save();
                newFacture.addProduit(produit,{ 
                    through: { 
                        qt_achat, 
                        mnt_total
                    } 
                });

                saleProduct.push({ 
                    prod_name, 
                    prod_price, 
                    qt_achat, 
                    mnt_total 
                });
                
                newFacture.mnt_fact += mnt_total;
                await newFacture.save();
            }
            const { num_fact, date_fact, mnt_fact } = newFacture.toJSON();
            const factureJson = {
                num_fact,
                date_fact,
                mnt_fact,
                client,
                sales_product: saleProduct
            }
            console.log(factureJson);
        }catch (error) {
            err = error;
            console.error(error)
        }
        
        res.json({err,data})
        
    },

    async getFactures(req,res){
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