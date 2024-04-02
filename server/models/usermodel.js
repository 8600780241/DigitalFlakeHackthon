const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String
    }
});

const usermodel = mongoose.model("users", userSchema);


module.exports = usermodel;