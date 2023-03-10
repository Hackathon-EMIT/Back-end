const { Produit, PointSale } = require("#Model");

module.exports = async function ( ps_id, code_prod){
    const produit = await Produit.findOne({ where: { code_prod } });
    const pointsale = await PointSale.findOne({ where: { ps_id } });
    await pointsale.addProduit(produit);
    await pointsale.save();
}