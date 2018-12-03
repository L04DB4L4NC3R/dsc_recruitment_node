const mongoose = require("mongoose");

// module.exports.users = mongoose.model("user", new mongoose.Schema({
//     name :String,
//     email :String,
//     reg :String,
//     applicanttype :String,
//     q1: String,
//     q2: String,
//     q3: String,
//     q4: String,
//     q5: String,
//     q6: String,
//     q7: String,
//     q8: String,
//     q9: String,
//     q10: String
// }));
module.exports.users = mongoose.model("user", new mongoose.Schema({
        firstName : String,
        registrationNumber  : String,
        phoneNumber       : String,
        emailAddress  : String,
        technical : {
            type: Boolean,
            default: false
        },
        designing : {
            type: Boolean,
            default: false
        },
        management : {
            type: Boolean,
            default: false
        },
        design:{
            uiux : {
                type: Boolean,
                default: false
            },
            graphic : {
                type: Boolean,
                default: false
            },
            video : {
                type: Boolean,
                default: false
            }
        },
        management:{
            writer : {
                type: Boolean,
                default: false
            },
            manager : {
                type: Boolean,
                default: false
            }
        },
        technical:{
            machinelearning : {
                type: Boolean,
                default: false
            },
            frontend : {
                type: Boolean,
                default: false
            },
            backend : {
                type: Boolean,
                default: false
            },
            python : {
                type: Boolean,
                default: false
            },
            android: {
                type: Boolean,
                default: false
            },
            general : {
                type: Boolean,
                default: false
            }
        }
}))