import express from "express"
import bodyParser from "body-parser"
import axios from "axios"
const port=3000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public"))
app.listen(port,()=>{
    console.log("Server running successfully and recieving requests from port "+port);
})
app.get("/",(req,res)=>{
    res.render("login.ejs");
})
app.post("/profile", async(req,res)=>{
    try{
    const response=await axios.get("https://alfa-leetcode-api.onrender.com/userProfile/"+req.body.username);
    const result=response.data;
    const responseB=await axios.get(`https://alfa-leetcode-api.onrender.com/${req.body.username}/badges`);
    const resultB=responseB.data;
    if(resultB.errors){throw new Error("Dudeeeee")}
    var badges=generateImgURLS(resultB.badges);
    const responseC=await axios.get(`https://alfa-leetcode-api.onrender.com/${req.body.username}/contest`);
    const resultC=responseC.data;
    if(!resultC.contestAttend){
    res.render("index.ejs",{
        totalSolved:result.totalSolved,
        easySolved:result.easySolved,
        mediumSolved:result.mediumSolved,
        hardSolved:result.hardSolved,
        ranking:result.ranking,
        badges:badges, //(object List) Has an id attribute, an icon attribute(Image link), has a displayName
    });}
    else{
        res.render("index.ejs",{
            totalSolved:result.totalSolved,
            easySolved:result.easySolved,
            mediumSolved:result.mediumSolved,
            hardSolved:result.hardSolved,
            ranking:result.ranking,
            badges:badges,
            contestAttend: resultC.contestAttend,
            contestRating: resultC.contestRating,
            contestGlobalRanking: resultC.contestGlobalRanking,
            totalParticipants: resultC.totalParticipants,
            contestTopPercentage: resultC.contestTopPercentage
        });
    }
}
    catch(err){
        console.log(err.message);
        res.render("login.ejs",{err:"Username does not exist"});
    }
})
function generateImgURLS(badges2){
    var map={"50 Days Badge 2024":"/images/50Days.gif","100 Days Badge 2024":"/images/100Days.webp",
        "Jul LeetCoding Challenge":"",
        "Jun LeetCoding Challenge":"/images/Jun.gif",
        "May LeetCoding Challenge":"/images/May.gif.jpeg",
        "Apr LeetCoding Challenge":"/images/Apr.gif",
        "Mar LeetCoding Challenge":"/images/Mar.gif.jpeg",
        "Feb LeetCoding Challenge":"/images/Feb.gif.jpeg",
        "Jan LeetCoding Challenge":"/images/Jan.gif"
    }
    let badges=[];
    for(var i=0;i<badges2.length;i++){
        console.log(badges2[i].displayName)
        if(map[badges2[i].displayName]){
            badges.push(map[badges2[i].displayName]);
        }
    }
    console.log(badges)
    return badges;
}