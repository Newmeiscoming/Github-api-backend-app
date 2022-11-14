const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const DBConnection = require("./database/dbConnection");
const POST = require("./routes/postRequests");
const GET = require("./routes/getRequests");
const DELETE = require("./routes/deleteRoutes");
const PUT = require("./routes/putRoutes");

DBConnection(process.env.DB_URL)
app.listen(8080,()=>{
    console.log(`Server is up at port ${PORT}`);
})
app.use(express.json());
app.use(POST);
app.use(GET);
app.use(DELETE);
app.use(PUT);
