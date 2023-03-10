const {Produit,Promo} = require('#Model');

module.exports= async(code_prod,code_promo) => {
    const produit = await Produit.findOne({where : {code_prod}});
    const promo = await Promo.findOne({where : {code_promo}});
    await produit.addPromo(promo);
    await produit.save();
};