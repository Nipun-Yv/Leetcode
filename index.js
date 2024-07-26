import express from "express"
import bodyParser from "body-parser"
const port=3000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public"))
app.listen(port,()=>{
    console.log("Server running successfully and recieving requests from port "+port);
})
app.get("/",(req,res)=>{
    res.render("index.ejs")
})