require("dotenv").config();
const Github_URL = process.env.Github_URL;
const fetch = require("node-fetch");



const Fetch = async (username)=>{
    const data = await fetch(Github_URL+username);

    return await data.json();
}

module.exports = Fetch;



