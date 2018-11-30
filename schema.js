const mongoose = require("mongoose");

module.exports.users = mongoose.model("user", new mongoose.Schema({
    name :String,
    email :String,
    reg :String,
    applicanttype :String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String
}));