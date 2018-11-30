require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

mongoose.connect(process.env.DBURL, {useNewUrlParser: true});
mongoose.connection.once("open",()=>console.log("connected"))
.on("error",()=>console.log("error connecting to db"));

app.use("/",require("./routes/user"));
app.use("/",require("./routes/admin"));

app.use((err,req,res,next)=>{
    console.log(err);
    res.send("Some error occurred").status(500);
});

app.listen(process.env.PORT || 3000, ()=>console.log("Listening"));