const categorymodel = require('../models/categorymodel');

exports.addCategory = async (req, res) => {
    try {
        const { name, description, status } = req.body;
        const data = new categorymodel({ name, description, status });
        await data.save();
        return res.status(200).send({
            message: "categories successfully added"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error categories added"
        })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { name, description, status } = req.body;
        const data = await categorymodel.findByIdAndUpdate(req.params.id, {
            name, description, status
        })
        return res.status(200).send({
            message: "data updated"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error categories updated"
        })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const data = await categorymodel.deleteMany(req.params)
        return res.status(200).send({
            "message": "data has deleted"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error categories deleted"
        })
    }
}

exports.searchCategory = async (req, res) => {
    try {
        const query = req.query.name;
        const items = await categorymodel.find({ $text: { $search: query } });
        // console.log(items)
        return res.status(200).send({
            messsage: "data searched",
            items
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error occured",
            error
        })
    }
}

exports.getcategory = async (req, res) => {
    try {
        const products = await categorymodel.find({});
        res.status(200).send({
            message: "categories are get in"
        })
    }
    catch (error) {
        console.log(error, "categories are not get it");
        return res.status(400).send({
            message: "error categories get "
        })
    }
}