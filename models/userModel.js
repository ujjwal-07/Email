const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname:{
        type : String,
        required : true,
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        requied : true
    }
});

const User = mongoose.model("user",userSchema)

module.exports = User