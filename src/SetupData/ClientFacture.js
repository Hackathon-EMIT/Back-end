const { Client, Facture } = require("#Model");

module.exports = async function (num_fact, cli_CIN){
    const client = await Client.findOne({ where: { cli_CIN } });
    const facture = await Facture.findOne({ where: { num_fact } });
    await client.addFacture(facture);
    await client.save();
}