const express = require("express");
const router = express.Router();
const User = require("../database/models/Usermodel");
const Fetcher = require("../Datafetcher");
const Friend = require("../database/models/Friends");
const Findmutual = require("../Findmutual");

//GET Request for checking mutual followings
router.get("/friend/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const existing = await Friend.findOne({ username });
    if (!existing) {
      const Mutual = await Findmutual(
        username + "/followers",
        username + "/following"
      );
      const addFriend = await Friend.create({
        username,
        mutual: Mutual,
      });

      res.status(201).json({
        status: "Success",
        friends: Mutual,
      });
      return;
    }
    res.status(200).json({
      status: "Success",
      friends: existing.mutual,
    });
  } catch (error) {
    res.status(201).json({
      status: "Failed",
      message: error.message,
    });
  }
});

//API for searching given user through query params such as username, location or id

router.get("/search",async (req,res)=>{
    const {username,location,id} = req.query;
    var user;
    try {
        if(username){
            user = await User.findOne({login:username});
        }
        else if(location){
            user = await User.findOne({location});
        }
        else if(id){
            user = await User.findOne({id});
        }
        else{
            res.status(300).json({
                status:"Failed",
                message:"Please provide with atleast one query paramater"
            });
            return;
        }

        if(!user){
            res.status(200).json({
                status:"Failed",
                message:"No such user found"
            });
            return;
        }
        res.status(200).json({
            status:"Success",
            data:user
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            status:"Failed",
            message:error.message
        });
    }
})



module.exports = router;
