require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const cors = require("cors");
const Recaptcha = require("express-recaptcha").Recaptcha
let recaptcha = new Recaptcha("6LcbHX8UAAAAADZ9V7zBlLcMO-UPeXQ0zl_ch0PB", process.env.CAPTSECRET);
const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

app.use(express.static("frontend"))

mongoose.connect(process.env.DBURL, {useNewUrlParser: true});
mongoose.connection.once("open",()=>console.log("connected"))
.on("error",()=>console.log("error connecting to db"));

app.get("/fill",(req,res,next)=>{
    res.sendFile(__dirname + "/frontend/index.html");
});
app.get("/",recaptcha.middleware.render,(req,res,next)=>{
    res.sendFile(__dirname + "/frontend/captcha.html")//({captcha:res.recaptcha});
});
app.post("/",recaptcha.middleware.verify,(req,res,next)=>{
    if(!req.recaptcha.error)
        return res.redirect("/fill");
    res.json({message:"ROBOT identified"});
})
app.use("/",require("./routes/user"));
app.use("/",require("./routes/admin"));

app.use((err,req,res,next)=>{
    console.log(err);
    res.send("Some error occurred").status(500);
});

app.listen(process.env.PORT || 3000, ()=>console.log("Listening"));