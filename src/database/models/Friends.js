const mongoose = require("mongoose");
const FriendSchema = new mongoose.Schema({
    username:String,
    mutual:[

    ]
})
module.exports = new mongoose.model("friends",FriendSchema);