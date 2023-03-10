const request = require("supertest");

function ignoreValue(data,values) {

    let newV = {};
    for(const k in data){
        if(!values.includes(k)){
            newV[k] = data[k]
        }
    }
    return newV;

}

function ignoreValueForAll(datas,values) {
    return datas.map((data) => ignoreValue(data,values))
}

module.exports = function ({
    url,
    reqBody,
},{
    attemptBody,
    attemptStatus,
    ignoredValue
}) {
    
    attemptStatus = attemptStatus || 200;
    ignoredValue = ignoredValue ?
        [...ignoredValue,"createdAt","updatedAt"]:
        ["createdAt","updatedAt"];
    it(`POST ${url} should send response : ${JSON.stringify(attemptBody)}`, async () => {
        
        const { body,status } = await request("http://localhost:5000")
            .post(url)
            .set("Accept","applicatin/json")
            .send(reqBody);

        let { data,err } = body;
        data = Array.isArray(data) ?
            ignoreValueForAll(data,ignoredValue):
            ignoreValue(data,ignoredValue);

        expect(status).toEqual(attemptStatus);
        expect({ data,err }).toEqual(attemptBody);
    }); 
}