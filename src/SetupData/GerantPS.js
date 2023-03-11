const { Gerant, PointSale } = require("#Model");

module.exports = async function ( g_id,  ps_id ){
    const gerant = await Gerant.findOne({ where: { g_id } });
    const pointsale = await PointSale.findOne({ where: { ps_id } });
    await gerant.addPointSale(pointsale);
    await gerant.save();
}