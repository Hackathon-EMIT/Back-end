const request = require("supertest");

module.exports = function ({
    uri
},{
    attemptBody,
    attemptStatus,
}) {

    attemptStatus = attemptStatus || 200;

    it(`GET ${uri} should send response : ${JSON.stringify(resBody)}`,() => {
        request("http://localhost:5000")
            .get(uri)
            .end((err,res) => {
                if(err) throw err;
                const { body,status } = res;
                expect(status).toEqual(attemptStatus);
                expect(body).toEqual(attemptBody);
            });
    });
}