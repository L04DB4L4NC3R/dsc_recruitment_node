require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const request = require("request");

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

app.use(express.static("frontend"))

mongoose.connect(process.env.DBURL, {useNewUrlParser: true});
mongoose.connection.once("open",()=>console.log("connected"))
.on("error",()=>console.log("error connecting to db"));

// app.get("/",(req,res,next)=>{
//     return res.send("hagga")
//     res.sendFile(__dirname + "/frontend/captcha.html");
// });
app.post("/",(req,res,next)=>{
    if(!req.body['g-recaptcha-response'])
        return res.json({message:"Please fill captcha"})
    
    let verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.CAPTSECRET + "&response=" + 
    req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

    request(verificationUrl,(error,response,body)=> {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if(body.success !== undefined && !body.success) {
          return res.json({message:"Failed captcha verification"});
        }
        res.redirect("/main")
      });

});
app.get("/",(req,res,next)=>{
    res.sendFile(__dirname + "/frontend/index.html");
});
app.get("/main",(req,res,next)=>{
    res.sendFile(__dirname + "/frontend/main.html");
});


app.use("/",require("./routes/user"));
app.use("/",require("./routes/admin"));

app.use((err,req,res,next)=>{
    console.log(err);
    res.send("Some error occurred").status(500);
});

app.listen(process.env.PORT || 3000, ()=>console.log("Listening"));