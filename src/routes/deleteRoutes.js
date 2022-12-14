const express = require("express");
const router = express.Router();
const User = require("../database/models/Usermodel");
const Fetcher = require("../Datafetcher");
const Friend = require("../database/models/Friends");

//DELETE Request for removing user from database

router.delete("/delete/:username",async (req,res)=>{
    const {username} = req.params;
    try {
        const user = await User.findOne({login:username});
        if(!user){
            res.status(300).json({
                status:"Failed",
                message:"No user found with given username"
            });
            return;
        }
        const deleteUser = await User.deleteOne({login:username});
        const deleteMutual = await Friend.deleteOne({username});
        res.status(201).json({
            status:"Success",
            message:"User deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:error.message
        });
    }
})


module.exports = router;
