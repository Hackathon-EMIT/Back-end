const stockHandler = require("./stockHandler");

const onConnection = (IO) => {
    return (socket) => {
        console.log("Hello Connected User");
        stockHandler(IO,socket);
    }
}

exports.onConnection = onConnection;