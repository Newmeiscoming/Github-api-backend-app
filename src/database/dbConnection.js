const mongoose = require("mongoose");

const DBConnection = (url)=>{
    mongoose.connect(url,async ()=>{
        try {
            console.log("Connection successfully established with database");
        } catch (error) {
            console.log(error.message);
        }
    })
}
module.exports = DBConnection;