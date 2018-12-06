const router = require("express").Router()
const users = require("../schema").users;

router.post("/record", (req,res,next)=>{
    if(!req.session.captcha)
        return res.redirect("/")
   
    if(!req.body.firstName || !req.body.registrationNumber || !req.body.emailAddress || 
        !req.body.phoneNumber || !req.body.answers.answerone || !req.body.answers.answertwo || 
        !req.body.answers.answerthree || !req.body.answers.answerfour || !req.body.answers.answerfive)
        return res.json({message:"No fields should be empty"});

    if(!req.body.registrationNumber.match(/^1[5-9]...[0-9][0-9][0-9][0-9]$/))
        return res.json({message:"Registration number invalid format"});
    if(!req.body.emailAddress.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        return res.json({message:"Email address invalid format"});
    if(!req.body.firstName.match(/[a-zA-Z ]*/))
        return res.json({message:"Name invalid format"});
    if(!req.body.phoneNumber.match(/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/))
        return res.json({message:"Phone number invalid format"});
    

    users.findOne({registrationNumber:req.body.registrationNumber})
    .then((u)=>{
        if(u){
            return res.json({message:"Already responded"});
        } 
        users.create(req.body)
        .then((ud)=>{
            req.session.captcha=!req.session.captcha;
            res.json(ud);
        })
        .catch(next);
    });
});


// router.post("/manager/record", (req,res,next)=>{
//     users.findOne({registrationNumber:req.body.registrationNumber, emailAddress:req.body.emailAddress})
//     .then((u)=>{
//         if(!u)
//             return res.json({message:"No user exists"});
        
//         if(!u.management)
//             return res.json({message:`Sorry, you have already responded some other domain`});

//         users.findOneAndUpdate({registrationNumber:req.body.registrationNumber, emailAddress:req.body.emailAddress},{
//             q1:req.body.q1,
//             q2:req.body.q2,
//             q3:req.body.q3,
//             q4:req.body.q4,
//             q5:req.body.q5,
//             q6:req.body.q6,
//             q7:req.body.q7,
//             q8:req.body.q8,
//             q9:req.body.q9,
//             q10:req.body.q10
//         }).then(()=>res.json({message:"Done"}))
//         .catch(next)
//     });
// });

module.exports = router;