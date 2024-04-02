const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");


exports.userRegister = async (req, res) => {
    try {
        let { email, password } = req.body;
        const existinguser = await usermodel.findOne({ email });
        if (existinguser) {
            return res.status(404).send({
                "message": "user already exists"
            })
        }
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
        const data = new usermodel({ email, password });
        await data.save();
        return res.status(200).send({
            "message": "data saved"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "data not save"
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = usermodel.findOne({ email });
        const existingPassward = usermodel.findOne({ password });
        if (!user) {
            return res.status(404).send({
                "message": 'user is not exists'
            })
        }
        const isMatched = bcrypt.compare(password, existingPassward.toString());
        if (!isMatched) {
            return res.status(404).send({
                "messsage": "password is not matched"
            })
        }
        const token = jsonwebtoken.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
        return res.status(200).send({
            "message": "login successfully"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error occured"
        })
    }
}

exports.userLogout = async (req, res) => {
    try {
        res.status(200).send({ message: 'Logout successful' });
    }
    catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "error occur while logout"
        })
    }
}
