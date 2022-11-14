const express = require("express");
const router = express.Router();
const User = require("../database/models/Usermodel");


// PUT Request for updating existing user

router.put("/update/:username",async (req,res)=>{
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
        const updateUser = await User.updateOne({login:username},req.body); 
        console.log(updateUser);
        res.status(201).json({
            status:"Success",
            message:"User updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:error.message
        });
    }
})


module.exports = router;
