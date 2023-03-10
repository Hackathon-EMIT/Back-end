const { mkdir,appendFileSync, readdirSync } = require("node:fs");
const { resolve } = require("node:path");


const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

(async () => {
    const featBasePath = resolve(__dirname,"../../Features");
    const featConserned = await rl.question("Consernee: ");
    const featDomain = await rl.question("Domaine: ");
    const featName = await rl.question("Fonctionnalite: ");
    const neededModel = await rl.question("Models(separee par des vigules): ");

    rl.close();

mkdir(`${featBasePath}/${featConserned}/${featDomain}/`,
{ recursive: true }, (err)=>{

    const contentIndex1 = 
    `\nexports.${featConserned} = require("./${featConserned}");`;

    const contentIndex2 = 
    `\nexports.${featDomain} = require("./${featDomain}");`;
    const consernedDir = 
    `${featBasePath}/${featConserned}/`;
    const domainDir = 
    `${consernedDir}/${featDomain}`;

    `${domainDir}/${featName}.js`
    const contentIndex3 = 
    `\nexports.${featName} = require("./${featName}");`;
    const contentFeat = 
    `const { ${neededModel} } = require("#Model");

module.exports = async ({ }) => {

}`
    !readdirSync(consernedDir)?.includes('index.js') &&
    appendFileSync(`${featBasePath}/index.js`,contentIndex1);

    !readdirSync(domainDir)?.includes('index.js') &&
    appendFileSync(`${consernedDir}/index.js`,contentIndex2);

    !readdirSync(domainDir)?.includes(`${featName}.js`) &&
    (appendFileSync(`${domainDir}/index.js`,contentIndex3),
    appendFileSync(`${domainDir}/${featName}.js`,contentFeat));
});


})();