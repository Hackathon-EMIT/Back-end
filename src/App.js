const express = require("express");
const { onConnection } = require("./Socket");
const App = express();
const rootRouter = require("./routes");
const http = require("node:http");
const server = http.createServer(App);
const { Server } = require("socket.io");
const port = process.env.PORT || 5000;
const cors = require("cors");
const IO = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }   
});

App.use(cors());
App.use(express.json());
App.use("/",rootRouter);

IO.on('connection',onConnection(IO));

server.listen(port,() => console.log(`Server is running on http://localhost:${port}`));

// module.exports = App;
