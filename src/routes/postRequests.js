const express = require("express");
const router = express.Router();
const User = require("../database/models/Usermodel");
const Fetcher = require("../Datafetcher");

//POST Route for accepting and searching the github username
router.post("/add/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ login: username });
    if (!user) {
      const data = await Fetcher(username);
      const addUser = await User.create(data);
      console.log(addUser);
      res.status(201).json({
        status: "Success",
        user: addUser,
      });
      return;
    }
    res.status(200).json({
        status:"Success",
        messae:"User already present",
        data:user
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
        status:"Failed",
        message:error.messsage
    })
  }
});

module.exports = router;
