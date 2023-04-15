const mongoose = require("mongoose");
// const validator = require("validator");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    email: {
        type: String,
        require: [true, "Please provide a unique email"],
        unique: true,


    },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String }

})

// creating a new model

const User = new mongoose.model('User', UserSchema);

module.exports = User;