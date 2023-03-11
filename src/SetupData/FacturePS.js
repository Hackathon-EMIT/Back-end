const { PointSale, Facture } = require("#Model");

module.exports = async function (ps_id,num_fact){
    const ps = await PointSale.findOne({ where: { ps_id } });
    const facture = await Facture.findOne({ where: { num_fact } });
    await ps.addFacture(facture);
    await ps.save();
    await facture.setPointSale(ps);
    await facture.save();
}