const { Client, Facture } = require("#Model");

module.exports = async function (cli_CIN,num_fact){
    const client = await Client.findOne({ where: { cli_CIN } });
    const facture = await Facture.findOne({ where: { num_fact } });
    await client.addFacture(facture);
    await client.save();
    await facture.setClient(client);
    await facture.save();
}