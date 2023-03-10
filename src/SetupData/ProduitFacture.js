const {Produit, Facture} = require("#Model");

module.exports = async (code_prod , num_fact )=>{
    const produit = await Produit.findOne({where : {code_prod}});
    const facture = await Facture.findOne({where : {num_fact}});
    await facture.addProduit(produit);
    await facture.save();
};