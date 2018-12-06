const router = require("express").Router()
const users = require("../schema").users;
const jwt = require("jsonwebtoken")

router.post("/login", (req,res,next)=>{

    if(req.body.passphrase === process.env.PASS) {
        jwt.sign({level:"admin"}, process.env.SECRET, (err, token)=>{
            if(err) 
                next(err)
            
            return res.json({token})
        });
    } else {
        return res.json({message:"Invalid input"})
    }
});

router.post("/show", (req,res,next)=>{
    jwt.verify(req.get("Authorization"), process.env.SECRET, (err, data)=>{
        if(err || data.level != "admin")
            return res.json({message:"Invalid token"});
        query={}
        query[req.body.domain]=true;
        query[`sub_${req.body.domain}.${req.body.subdomain}`]=true;
        users.find(query)
        .then(d=>res.json(d))
        .catch(next);
    })
    
});


router.post("/show/all", (req,res,next)=>{
    jwt.verify(req.get("Authorization"), process.env.SECRET, (err, data)=>{
        if(err || data.level != "admin")
            return res.json({message:"Invalid token"});
        users.find({})
        .then(d=>res.json(d))
        .catch(next);
    })
    
});



module.exports = router;