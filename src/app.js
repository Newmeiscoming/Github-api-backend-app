const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const DBConnection = require("./database/dbConnection");
const routes = require("./routes");

DBConnection(process.env.DB_URL)
app.listen(8080,()=>{
    console.log(`Server is up at port ${PORT}`);
})
app.use(routes);