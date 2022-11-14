const mongoose = require("mongoose");
const FriendSchema = new mongoose.Schema({
    username:String,
    mutual:Array
},{versionKey:false})
module.exports = new mongoose.model("friends",FriendSchema);