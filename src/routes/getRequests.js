const express = require("express");
const router = express.Router();
const User = require("../database/models/Usermodel");
const Fetcher = require("../Datafetcher");
const Friend = require("../database/models/Friends");
const Findmutual = require("../Findmutual");

//GET Request for checking mutual followings
router.get("/friend/:username",async (req,res)=>{
    const {username} = req.params;
    try {
        const existing = await Friend.findOne({username});
        if(!existing){
            const Mutual = await Findmutual(username+"/followers",username+"/following");
            const addFriend = await Friend.create({
                username,
                mutual:Mutual
            });

            res.status(201).json({
                status:"Success",
                friends:Mutual
            });
            return;

        }
        res.status(200).json({
            status:"Success",
            friends:existing.mutual
        });

        
        
    } catch (error) {
        res.status(201).json({
            status:"Failed",
            message:error.message
        });
    }
})


module.exports = router;
