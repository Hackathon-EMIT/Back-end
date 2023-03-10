const { readFileSync } = require("node:fs")
module.exports = async ({ uri,model }) => {
    const readingFile = readFileSync(uri,{ encoding: "utf-8" });
    const readingJSON = JSON.parse(readingFile);
    for (const attributes of readingJSON) {
        console.log(attributes);
        await model.create(attributes);
    }
    // console.log(readingJSON);
}
