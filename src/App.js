const express = require("express");
const App = express();
const rootRouter = require("./routes");
const port = process.env.PORT || 5000;
const cors = require("cors");

App.use(cors());
App.use(express.json());
App.use("/",rootRouter);

App.listen(port,() => console.log(`Server is running on http://localhost:${port}`));

// module.exports = App;
