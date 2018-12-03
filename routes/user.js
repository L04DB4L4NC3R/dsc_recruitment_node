const router = require("express").Router()
const users = require("../schema").users;

router.post("/record", (req,res,next)=>{
    users.findOne({registrationNumber:req.body.registrationNumber})
    .then((u)=>{
        if(u){
            return res.json({message:"Already responded"});
        } 
        users.create(req.body)
        .then((ud)=>res.json(ud))
        .catch(next);
    });
});


router.post("/manager/record", (req,res,next)=>{
    users.findOne({registrationNumber:req.body.registrationNumber, emailAddress:req.body.emailAddress})
    .then((u)=>{
        if(!u)
            return res.json({message:"No user exists"});
        
        if(!u.management)
            return res.json({message:`Sorry, you have already responded some other domain`});

        users.findOneAndUpdate({registrationNumber:req.body.registrationNumber, emailAddress:req.body.emailAddress},{
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