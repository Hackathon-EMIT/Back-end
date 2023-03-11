const { Produit, Fournisor } = require("#Model");

module.exports = async function (id_four, code_prod){
    const produit = await Produit.findOne({ where: { code_prod } });
    const fournisor = await Fournisor.findOne({ where: { id_four } });
    await fournisor.addProduit(produit);
    await fournisor.save();
}