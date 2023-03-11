const { Gerant, Notif } = require("#Model");

module.exports = async function (g_id,notif_id){
    const gerant = await Gerant.findOne({ where: { g_id } });
    const notif = await Notif.findOne({ where: { notif_id } });
    await notif.addGerant(gerant);
}