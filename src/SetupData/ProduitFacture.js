const {Produit, Facture} = require("#Model");

module.exports = async (code_prod , num_fact )=>{
    const produit = await Produit.findOne({where : { code_prod }});
    const facture = await Facture.findOne({where : { num_fact }});
    console.log((await facture.toJSON()))
    await facture.addProduit(produit,{
        through: { qt_achat: 5, mnt_total: 500000 }
    });
    await facture.save();
};