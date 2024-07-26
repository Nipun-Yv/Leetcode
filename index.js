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
    const responseC=await axios.get(`https://alfa-leetcode-api.onrender.com/${req.body.username}/contest`);
    const resultC=responseC.data;
    if(!resultC.contestAttend){
    res.render("index.ejs",{
        totalSolved:result.totalSolved,
        easySolved:result.easySolved,
        mediumSolved:result.mediumSolved,
        hardSolved:result.hardSolved,
        ranking:result.ranking,
        badges:resultB.badges, //(object List) Has an id attribute, an icon attribute(Image link), has a displayName
    });}
    else{
        res.render("index.ejs",{
            totalSolved:result.totalSolved,
            easySolved:result.easySolved,
            mediumSolved:result.mediumSolved,
            hardSolved:result.hardSolved,
            ranking:result.ranking,
            badges:resultB.badges,
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