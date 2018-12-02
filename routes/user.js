const router = require("express").Router()
const users = require("../schema").users;

router.post("/record", (req,res,next)=>{
    users.findOne({reg:req.body.reg})
    .then((u)=>{
        if(u){
            return res.json({message:"Already responded"});
        } 
        users.create({
            name:req.body.name,
            reg: req.body.reg,
            applicanttype: req.body.applicanttype,
            email: req.body.email
        }).then((ud)=>res.json(ud))
        .catch(next);
    });
});


router.post("/manager/record", (req,res,next)=>{
    users.findOne({reg:req.body.reg, email:req.body.email})
    .then((u)=>{
        if(!u)
            return res.json({message:"No user exists"});
        
        if(u.applicanttype != "manager")
            return res.json({message:`Sorry, you have already responded some other domain`});

        users.findOneAndUpdate({reg:req.body.reg, email:req.body.email},{
            q1:req.body.q1,
            q2:req.body.q2,
            q3:req.body.q3,
            q4:req.body.q4,
            q5:req.body.q5,
            q6:req.body.q6,
            q7:req.body.q7,
            q8:req.body.q8,
            q9:req.body.q9,
            q10:req.body.q10
        }).then(()=>res.json({message:"Done"}))
        .catch(next)
    });
});

module.exports = router;