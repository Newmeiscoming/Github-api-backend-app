const fetch = require("node-fetch");
const Fetch = require("./Datafetcher");

const  Findmutual = async (followers_url,following_url)=>{
    // console.log(followers_url,following_url)
    try {
        const followers = await Fetch(followers_url);
        const following = await Fetch(following_url);
        let set1 = new Set();
        const Mutual = new Array();

        for(let i of followers){
            set1.add(i.login);
        }
        for(let i of following){
            if(set1.has(i.login)){
                const data = await Fetch(i.login);
                Mutual.push(data);
            }
        }
        return Mutual;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = Findmutual;